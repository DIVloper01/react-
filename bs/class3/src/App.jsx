import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="flex space-x-10 p-5 w-full h-[10vh] items-center justify-center relative">
        <img
          className=" h-auto w-42  "
          src="https://www.dominos.co.in/assets/Logo@2x.png"
        />
        <div className="relative left-20 items-center flex space-x-16">
          <a
            className="font-medium cursor-pointer  text-gray-400 text-md"
            href=""
          >
            OUR MENU
          </a>
          <a className="font-medium cursor-pointer  text-gray-400 text-md">
            DOMINO'S STORIES
          </a>
          <a className="font-medium cursor-pointer  text-gray-400 text-md">
            GIFT CARD
          </a>
          <a className="font-medium cursor-pointer  text-gray-400 text-md">
            CORPORATE MEMORY
          </a>
          <a className="font-medium cursor-pointer  text-gray-400 text-md">
            CONTACT
          </a>
          <button className="text-center text-lg bg-red-700 cursor-pointer hover:bg-red-800 text-white h-14 w-36 rounded">
            Download App
          </button>
        </div>
      </nav>
      <div className="items-center justify-center flex">
        <img
          src="https://www.dominos.co.in/blog/wp-content/uploads/2021/12/Dominos-Winter-Sale-Offers.jpg"
          className="w-[98vw] rounded h-[65vh]"
        ></img>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold text-gray-500 mb-6">Coupons & Offers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 w-full max-w-7xl">
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer"
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer"
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-gray-500 text-4xl font-bold ">Explore</h1>
        <div className="flex flex-col justify-center w-[20vw] items-center text-center border-2 border-black">
          <img src="https://www.dominos.co.in/assets/menu@2x.png" className=" p-2.5 h-[14vh] w-[4vw]"></img>
          <p className="text-2xl  text-zinc-800 font-bold p-2.5 ">Our Menu</p>
          <p className="text-xl text-zinc-700 font-sm p-2.5">

            Explore our range of delicious Pizzas, delivered in 30 minutes!</p>

        </div>

      </div>
    </>
  );
}

export default App;
