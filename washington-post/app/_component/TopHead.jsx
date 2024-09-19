"use client";

import { Cloud, ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { getCurrentWeather } from "@/lib/GlobalApi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function TopHead() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(null);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [uvIndex, setUvIndex] = useState(null);
  const latitude = 41.7151; // Replace with your desired latitude
  const longitude = 44.8271; // Replace with your desired longitude

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update date every second

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getCurrentWeather(latitude, longitude);
        const tempInCelsius = weatherData.temperature - 273.15; // Convert from Kelvin to Celsius
        setTemperature(tempInCelsius.toFixed(2)); // Set temperature with two decimal points
        setIcon(weatherData.icon);
        setDescription(weatherData.description);
        setHumidity(weatherData.humidity);
        setWindSpeed(weatherData.windSpeed);
        setUvIndex(weatherData.uvIndex);
      } catch (error) {
        setTemperature("N/A");
        setIcon(null);
        setDescription("Error fetching weather");
        setHumidity("N/A");
        setWindSpeed("N/A");
        setUvIndex("N/A");
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  return (
    <section className="flex justify-between items-center mx-auto w-[94%] py-3 border-b-[14px] border-black">
      <div className="left">
        <h1 className="text-xs font-semibold">
          {format(currentDate, "eeee, d MMMM yyyy")}
        </h1>
      </div>
      <div className="right items-center flex gap-1 text-xs font-semibold">
        <Dialog>
          <DialogTrigger>
            <ExternalLink className="w-5 cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">
                Weather Forecast
              </DialogTitle>
              <DialogDescription>
                <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
                  {icon ? (
                    <img
                      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                      alt="Weather icon"
                      className="w-16 h-16 mb-2"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 mb-2"></div>
                  )}
                  <h1 className="text-2xl font-semibold mb-2">
                    {temperature !== null ? `${temperature}°C` : "Loading..."}
                  </h1>
                  <p className="text-gray-500 mb-2">
                    {description || "Lorem ipsum dolor sit amet"}
                  </p>
                  <div className="w-full border-t border-gray-200 mt-2 pt-2">
                    <div className="flex justify-between text-sm">
                      <span>Humidity:</span>
                      <span>
                        {humidity !== null ? `${humidity}%` : "Loading..."}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Wind Speed:</span>
                      <span>
                        {windSpeed !== null ? `${windSpeed} m/s` : "Loading..."}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>UV Index:</span>
                      <span>{uvIndex !== null ? uvIndex : "Loading..."}</span>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <h1>Full forecast</h1> <Cloud className="w-5" />
        {temperature !== null ? `${temperature}°C` : "Loading..."} |{" "}
        <h1>
          Mashhad, <span className="text-gray-500 font-medium">Iran</span>
        </h1>
      </div>
    </section>
  );
}

export default TopHead;
