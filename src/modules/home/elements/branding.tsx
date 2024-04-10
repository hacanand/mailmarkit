import { partners } from '@/app/configs/constants'
import React from 'react'
import Image from "next/image";
import Marquee from 'react-fast-marquee'
const Branding = () => {
  return (
    <div className="border-t rounded-t-[65px]  bg-gradient-to-b from-yellow-600 to-indigo-600 border-[#000] py-10">
      <h3 className=" test-xl md:text-2xl test-center max-w-3xl mx-auto font-[400] z-20 relative text-center">
        CREATED BY THE EARLY MORNING NITians teams
      </h3>
      <div className="w-full text-center  pt-1">
        <h3 className="uppercase bg-yellow-500 rounded p-2 test-2xl text-xl md:text-2xl text-center inline-block font ">
          NOW POWERING THE WORLD&aposS TOP NEWSLETTER
        </h3>
      </div>
      <div>
        <Marquee className="w-full flex justify-evenly">
          {partners.map((i: PartnersTypes, index: number) => (
            <>
              <Image
                src={i.url}
                key={index}
                alt={i.url}
                width={200}
                height={20}
                className="md:mx-8 w-[150px] md:w-[150px] mx-3"
              />
            </>
          ))}{" "}
        </Marquee>
      </div>
    </div>
  );
}

export default Branding