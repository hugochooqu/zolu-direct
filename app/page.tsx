import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPeopleGroup, FaShop } from "react-icons/fa6";
import { GiFarmer } from "react-icons/gi";

const page = () => {
  return (
    <>
  <div className="relative w-full h-auto lg:h-screen bg-cover bg-center text-white bg-[url(/bg.jpg)]">
    <div className="absolute inset-0 bg-black/60 z-0"></div>
    <Navbar />
    <div className="relative z-10 px-8 py-36 flex flex-col gap-6  ">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
        Introducing Zolu Direct :<br /> Revolutionizing Agro-Commerce
      </h1>
      <div className="flex flex-col gap-4">
        <p className="text-lg ">
          Join our waitlist to be the first to know when we launch!
        </p>
        <div className="flex flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your Email address"
            className="p-2 border w-full max-w-sm"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="max-w-sm bg-green-700 w-auto px-8 ">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  </div>

      {/* About section */}
      <div className="bg-green-800 w-full h-auto">
        <p className="lg:text-center text-2xl py-24 px-8 lg:px-[20%] text-white leading-snug ">
          Zolu Direct brings the feel of the local market to your phone. We connect farmers, sellers, and buyers in one easy-to use-platform. From fresh farm produce to processed foods and livestock, everything you need is just a click away. And with our unique chat feature, you can bargain just like you would in person. No stress, no overcrowded markets, just fresh, fast, and reliable shopping delivered to your doorstep.
        </p>
      </div>

      <div className="w-full h-auto p-8 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between">
        <div className="text-2xl">
          <h1 className="font-semibold">
            Be part of our journey! Register your interest to:
          </h1>
        </div>
        <div>
          <ul className="text-2xl list-disc flex flex-col gap-2 px-8 lg:px-0">
            <li>Get exclusive updates on our launch</li>
            <li>Be among the first to experience our platform</li>
            <li> Receive special offers and incentives</li>
          </ul>
        </div>
      </div>

      <div className=" mt-4">
        <h1 className="text-center text-2xl font-bold">Who should register?</h1>
        <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-8 max-w-7xl lg:mx-auto">
          <Card
            icon={<GiFarmer size={20} />}
            title="Farmers"
            desc="Get direct access to buyers and vendors"
            className="bg-green-700"
          />
          <Card
            icon={<FaShop size={20} />}
            title="Vendors"
            desc="Expand your customer base and increase sales"
            className="bg-green-700"
          />
          <Card
            icon={<FaPeopleGroup size={20} />}
            title="Customers"
            desc="Enjoy convenient shopping and competitive prices."
            className="bg-green-700"
          />
          <Card
            icon={<FaPeopleCarry size={20} />}
            title="Bulk Buyers"
            desc="Get the best deals on large quantities"
            className="bg-green-700"
          />
        </div>
      </div>

      <div className="bg-green-800 w-full h-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col px-8 py-12 lg:py-24 text-white gap-3 lg:w-1/2">
            <p className="text-lg ">
              Join our waitlist to be the first to know when we launch!
            </p>
            <div className="flex flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your Email address"
                className="p-2 border w-full max-w-sm"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="max-w-sm bg-green-700 w-auto px-8 ">
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="text-white lg:w-1/2 py-6 lg:py-24 px-8 ">
          <p className="text-xl lg:text-2xl">By registering, you'll be taking the first step towards a more efficient, convenient, and profitable agro-commerce experience.</p>
          </div>
        </div>
        <p className="lg:text-center px-8 text-2xl text-white pb-16">Stay tuned for our launch!</p>
      </div>
    </>
  );
};

export default page;
