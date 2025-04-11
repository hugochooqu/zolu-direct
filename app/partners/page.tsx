import Card from "@/components/Card";
import LogoCarousel from "@/components/LogoCarousel";
import Navbar from "@/components/Navbar";
import { collaboration } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import { FaArrowRight, FaPeopleGroup, FaShop } from "react-icons/fa6";
import { GiFarmer } from "react-icons/gi";
import { MdOutlineArrowForward, MdOutlineArrowRight } from "react-icons/md";



const page = () => {
  return (
    <>
      <div className="relative w-full h-auto lg:h-screen bg-cover bg-center text-white bg-[url(/partners-bg.jpg)]">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <Navbar />
        <div className="relative z-10 px-8 py-24 flex flex-col gap-6  ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Be Part of the Movement :<br /> Powering Agro-Commerce Together
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-lg md:w-2/3 lg:w-1/2 ">
              At Zolu Direct, we&apos;re building more than a marketplace,
              we&apos;re creating an ecosystem that connects every player in the
              agro value chain.
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
                Partner with Zolu
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-800 w-full h-auto flex flex-col lg:flex-row">
        <p className="lg:w-[20%] text-2xl text-white p-8">
          Some companies we&apos;re engaging
        </p>
        <div className="lg:w-[80%]">
          <LogoCarousel />
        </div>
      </div>

      <div className="w-full h-auto p-8 flex flex-col  gap-5 lg:gap-4 justify-between ">
        <div className="text-2xl">
          <h1 className="font-semibold text-center">
            Why join our platform?
          </h1>
        </div>
        <div className="text-2xl lg:w-1/2">
          <p>Whether you&apos;re a farmer, vendor, bulk buyer, household shopper, or agro brand, Zolu Direct is designed to work for you.
          </p>
        </div>
      </div>

      <div className=" mt-4">
        <div className="mt-6 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 px-8 max-w-[1480px] lg:mx-auto">
          <Card
            icon={<GiFarmer size={20} />}
            title="Farmers"
            desc="Get direct access to reliable buyers with no middlemen"
            className="bg-green-700"
          />
          <Card
            icon={<FaShop size={20} />}
            title="Vendors"
            desc="Boost your visibility and credibility through our AI-matching system"
            className="bg-green-700"
          />
          <Card
            icon={<FaPeopleGroup size={20} />}
            title="Customers"
            desc="Shop easily from your home, office, or business — delivered fast."
            className="bg-green-700"
          />
          <Card
            icon={<FaPeopleCarry size={20} />}
            title="Bulk Buyers"
            desc="Enjoy negotiated deals, better logistics, and vendor trust ratings."
            className="bg-green-700"
          />
          <Card
            icon={<FaPeopleCarry size={20} />}
            title="Agro Brands"
            desc="Reach buyers directly and expand your market across Nigeria & beyond"
            className="bg-green-700"
          />
        </div>
      </div>

      <div className="w-full lg:h-full flex flex-col lg:flex-row">
        <div className="lg:w-1/2 px-8 py-10 lg:py-20 text-black">
          <h1 className="text-2xl font-semibold">Partner with us</h1>
          <br />
          <p className="text-xl">
            Are you a brand, producer, or organization in the agro industry?
            Let&apos;s build something transformative together.
          </p>
          <br />
          <p className="text-xl">We&apos;re looking to collaborate with:</p>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            {collaboration.map((collab) => (
              <div className="flex flex-row gap-2" key={collab.id}>
              <span>
                <MdOutlineArrowRight size={30} color="green" />
              </span>
              <p>{collab.desc}</p>
            </div>  
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 px-8 pb-8 lg:p-8">
          <Image
            src="/bg.jpg"
            alt="bg"
            width={800}
            height={100}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="bg-green-800 w-full h-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col px-8 py-12 lg:py-24 text-white gap-3 lg:w-1/2">
            <p className="text-lg ">
              Partner with Zolu
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
                Express your interest
              </button>
            </div>
          </div>
          <div className="text-white lg:w-1/2 py-6 lg:py-24 px-8 ">
          <p className="text-xl lg:text-2xl">Join our movement to digitize agro-commerce and reach more customers across Africa.
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
