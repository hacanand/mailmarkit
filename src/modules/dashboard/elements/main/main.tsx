"use client";
import DashboardOverViewCard from "@/shared/components/cards/overview.card";
import { useUser } from "@clerk/nextjs";
import SubscriberCharts from "@/shared/components/charts/subscribers.charts";
import { Button } from "@nextui-org/react";
import { ICONS } from "@/shared/utils/icons";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

const Main = () => {
  const [copied, setCopied] = useState(false);
  const { user } = useUser();

  const handleCopyClick = () => {
    const smallText = document.querySelector(".copy-text") as HTMLInputElement;
    if (smallText) {
      const textToCopy = smallText.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        toast.success("Link copied to clipboard");
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div className="p-5 w-full h-screen bg-[#f9fafb]">
      <h1 className="text-2xl text-surface-900 font-medium">
        Hi {user?.firstName}👋
      </h1>
      <p className="opacity-[.7] text-sm pt-2">
        Here&apos;s how your publication is doing
      </p>
      <div className="w-full flex">
        <div className="w-[65%] min-h-[88vh] pr-5 ">
          <br />
          <DashboardOverViewCard />
          <br />
          <SubscriberCharts />
        </div>
        <div className="w-[35%] p-5 ">
          <div className="w-full flex justify-end">
            <Button className="bg-black text-white text-lg rounded !px-6">
              <span className="mr-1 ml-[-5px]">{ICONS.write}</span>
              Start Writing
            </Button>
          </div>
          <br />
          {/* resources */}
          <div>
            <h5 className="text-lg font-medium">Resources</h5>
            <div className="w-full bg-white border rounded p-5 my-3">
              <div>
                <h4 className="font-medium">
                  Home Page
                  <div
                    className="w-full pl-2 my-1 h-[38px] bg-transparent border rounded-lg relative flex items-center cursor-pointer"
                    onClick={handleCopyClick}
                  >
                    <small
                      className={`w-[70%] p-1 text-sm overflow-ellipsis whitespace-nowrap copy-text ${
                        copied ? "bg-blue-200 rounded " : "bg-transparent"
                      }`}
                    >
                      https://mailmarkit.com/{user?.username}
                    </small>
                    <div className="absolute h-[38px] w-[90px] rounded-r-lg bg-[#DFE7FF] right-0 flex items-center justify-center">
                      <span className="text-lg">{ICONS.copy}</span>
                      <span className="pl-1">copy</span>
                    </div>
                  </div>
                </h4>
              </div>
            </div>
          </div>
          {/* tutorial */}
          <div className="w-full bg-white border rounded p-5 my-3">
            <h5 className="font-medium">Tutorials</h5>
            <p className="text-sm opacity-[.7]">
              Learn how to get started on becodemy and utilize all our features,
              directly from the becodemy team.
            </p>
            <br />
            <Button className="bg-[#FBCFE8] text-[#831743] rounded-lg h-[35px] flex items-center">
              Tutorials <span>{ICONS.link}</span>
            </Button>
          </div>

          {/* Need help */}
          <div className="w-full bg-white border rounded p-5 my-3">
            <h5 className="font-medium">Need help?</h5>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">Knowledge base</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">API Documentation</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">Blog</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">FAQ</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
