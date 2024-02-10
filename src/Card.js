import React from "react";
import { FaMale, FaFemale, FaPhone } from "react-icons/fa";

const Card = ({ data }) => {
  return (
    <div className="bg-white max-w-md mx-auto p-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
      <img
        src={data[0].picture.large}
        alt="User"
        className="rounded-full w-32 h-32 mb-4 sm:mb-0 sm:mr-8 hover:scale-105 transition duration-300 ease-in-out"
      />
      <div>
        <p className="text-xl font-semibold mb-2 sm:mb-4">
          {data[0].name.first} {data[0].name.last}
        </p>
        <div className="flex items-center text-gray-600 mb-2 sm:mb-3">
          {data[0].gender === "male" ? (
            <FaMale className="mr-2" />
          ) : (
            <FaFemale className="mr-2" />
          )}
          {data[0].gender}
        </div>
        <div className="flex items-center text-gray-600 mb-2 sm:mb-3">
          <FaPhone className="mr-2" />
          {data[0].phone}
        </div>
      </div>
    </div>
  );
};

export default Card;
