import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const FeatureHighlight = () => {
  return (
    <div className="w-full md:flex items-center bg-[#9399f4] p-6 text-center   md:text-left md:min-h-[55vh]">
      <div className="w-full md:w-[50%]">
        <Image
          src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png"
          alt=""
          width={400}
          height={400}
          className="w-[85%] ml-5"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="font-clashDisplay uppercase text-cyber-ink text-3xl md:text-5xl mx-auto mb-2 md:text-left">
          create
        </h2>
        <br />
        <h3 className="text-cyber-ink text-xl md:text-3xl max-w-lg font-semibold">
          The most powerful editing and design tools in email marketing.
        </h3>
        <br />
        <p className="text-cyber-ink text-xl md:text-2xl max-w-lg font-[400]">
          Warning: A writing experience unlike anything you&lsquo;ve ever
          experienced-proceed with caution.
              </p>
              <br />
              <Button className="bg-white font-semibold  border-[2px] border-[#000] rounded text-2xl !p-7 !px-12">Start Building
              </Button>
      </div>
    </div>
  );
};

export default FeatureHighlight;
