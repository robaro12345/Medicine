import React from 'react';
import './Cards.css'

const Card = ({ frontContent, backContent }) => {

  return (
    <div className="card perspective w-full h-64 m-4 p-4">
      <div className="card-inner relative w-full h-full">
        {/* Front Side */}
        <div className="card-face front bg-blue-500 text-white flex items-center justify-center rounded">
          {frontContent}
        </div>
        {/* Back Side */}
        <div className="card-face back bg-red-500 text-white flex items-center justify-center rounded">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default Card;
