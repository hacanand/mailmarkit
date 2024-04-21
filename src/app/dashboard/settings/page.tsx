"use client";
import SettingTabs from "@/shared/components/tabs/settings.tabs";
import useGetMembership from "@/shared/hooks/useGetMembership";
import useSettingsFilter from "@/shared/hooks/useSettingsFilter";
import { UserProfile } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  generateApiKey,
  regenerateApiKey,
} from "@/shared/utils/token.generator";
import { Snippet } from "@nextui-org/react";
import { ICONS } from "@/shared/utils/icons";
import toast from "react-hot-toast";

const Page = () => {
  const [apiKey, setApiKey] = useState("");
  const { activeItem } = useSettingsFilter();
  const { data } = useGetMembership();
  useEffect(() => {
    const apiKey = Cookies.get("api_key");
    if (!apiKey) {
      generateApiKeyHandler();
    } else {
      setApiKey(apiKey);
    }
  }, []);
  const generateApiKeyHandler = async () => {
    await generateApiKey().then((res) => {
      console.log(res);
      Cookies.set("api_key", res);
      setApiKey(res);
    });
  };
  const handleCopy = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;
    if (smallText) {
      const textToCopy = smallText.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast.success("Copied to clipboard");
        })
        .catch((error) => {
          console.log("Error copying text: ", error);
        });
    }
  };
  const handleRegenerateApiKey = async () => {
    await regenerateApiKey().then((res) => {
      Cookies.set("api_key", res);
      setApiKey(res);
      toast.success("API key regenerated successfully");
    });
  };

  return (
    <div className="w-full p-5">
        <SettingTabs />
      {activeItem === "Customize Profile" && (
        <div className="w-full h-screen flex justify-center">
          <UserProfile />
        </div>
      )}
      {activeItem === "API Access" && (
        <div className="w-full  flex justify-center">
          {data?.plan === "GROW" ? (
            <div className="flex justify-center items">
              <h3>Please update your subscription plan to get access of api</h3>
            </div>
          ) : (
            <div className="p-5 w-full my-2 flex  gap-2 items-center rounded  border ">
              <h3 className="font-bold ">API_KEY:</h3>
              <p className="overflow-x-auto scrollbar copy-text">
                {apiKey}
              </p>
              <div
                className="gap-1 rounded-xl p-2 cursor-pointer bg-[#DFE7FF] flex items-center justify-center"
                onClick={handleCopy}
              >
                <span>{ICONS.copy}</span>
                <span >Copy</span>
              </div>
              <div
                className=" rounded-xl p-2 cursor-pointer bg-[#DFE7FF] flex items-center justify-center"
                onClick={handleRegenerateApiKey}
              >
                <span>{ICONS.regenerate}</span>
                <span>Regenerate</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
