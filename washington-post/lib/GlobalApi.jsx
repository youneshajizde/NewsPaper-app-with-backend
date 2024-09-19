import axios from "axios";

const weatherKey = "fe7cf353226eb76aab2d3ced507865cb";

const getCurrentWeather = async (latitude, longitude) => {
  try {
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`
    );
    const weatherData = weatherResponse.data;
    const roundedTemp = Math.round(weatherData.main.temp * 10) / 10;

    return {
      temperature: roundedTemp,
      icon: weatherData.weather[0].icon,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
      uvIndex: 0,
    };
  } catch (error) {
    console.log(error);
  }
};

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getAllNews = () => axiosClient.get("/news?populate=*");
const getNewsById = (id) => axiosClient.get(`/news/${id}?populate=*`);
export { getCurrentWeather, getAllNews, getNewsById };

// const axiosClient = axios.create({
//   baseURL: "http://localhost:1337/api",
// });

// const getDailyDeals = () => axiosClient.get("/products?populate=*");

// const getAllProducts = () => axiosClient.get("/products?populate=*");

// const getBrands = () => axiosClient.get("/categories?populate=*");

// const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);
