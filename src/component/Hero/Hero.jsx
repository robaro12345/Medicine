import React from 'react';
import './Hero.css'; // Ensure this is correctly pointing to your CSS file

export default function Hero() {
  //let [Search, SetSearch] = useState('');

  // function onchange(event) {
  //   SetSearch(event.target.value);
  //   onSearch(Search);
  // }

  // const onclick = () => {
  //   onSearch(Search);
  // };

  return (
    <div className=" h-screen flex items-center justify-center parallax-bg">
      <div className="text-center parallax-content">
        <img
          className="mx-auto mb-6"
          src="/images/pills-pill-svgrepo-com.svg"
          alt="Site Logo"
          width="72"
          height="57"
        />
        <h1 className="text-4xl font-bold text-black">Medicines</h1>
        <div className="mx-auto max-w-lg">
          <p className="text-lg mb-4 text-black">
            On this website, you can find various Medicines with descriptions about them.
          </p>
          {/* <div className="flex items-center justify-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search for medicines..."
              onChange={onchange}
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={onclick}
              className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 transition duration-300"
            >
              Search
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
