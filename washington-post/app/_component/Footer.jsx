import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 border-t border-gray-200">
      <div className=" w-[94%] mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Guardian</h2>
            <p className="mb-4">Delivering quality journalism since 1821.</p>
            <p className="mb-2">© 2024 The Guardian</p>
            <p>All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Opinion
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Culture
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Sports
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2 flex items-center">
                <Mail className="mr-2 w-5 h-5 text-gray-600" />{" "}
                contact@theguardian.com
              </li>
              <li className="mb-2 flex items-center">
                <Phone className="mr-2 w-5 h-5 text-gray-600" /> +1 234 567 890
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" className="hover:text-gray-400">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
          <p>Privacy Policy | Terms of Service | Advertise with us</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
