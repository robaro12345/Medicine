// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Made By Omkar With ChatGPT
        </p>
        <p className="text-xs mt-2">
          <p className="hover:underline inline">Privacy Policy</p> | 
          <p className="hover:underline ml-2 inline">Terms of Service</p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
