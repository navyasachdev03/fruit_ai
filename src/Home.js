import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-300 via-blue-200 to-teal-200">
      <div className="w-80 p-6 rounded-3xl bg-gradient-to-b from-purple-100 via-blue-50 to-teal-50 shadow-lg">
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-1">Fruit.AI</h1>
        <p className="text-center text-gray-600 mb-4">"Be Healthy!"</p>

        <div className="grid grid-cols-2 gap-4">
          <Link to="/chat">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-purple-900 font-bold py-4 rounded-xl w-full">
              Chat.
            </button>
          </Link>
          
          <Link to="/translate">
            <button className="bg-green-200 hover:bg-green-300 text-blue-900 font-bold py-4 rounded-xl w-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg" 
                alt="Translate"
                className="mx-auto w-8"
              />
            </button>
          </Link>

          <Link to="/faqs">
            <button className="bg-purple-200 hover:bg-purple-300 text-gray-800 font-bold py-4 rounded-xl w-full">
              FAQs
            </button>
          </Link>

          <Link to="/about">
            <button className="bg-pink-200 hover:bg-pink-300 text-purple-900 font-bold py-4 rounded-xl w-full">
              About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;