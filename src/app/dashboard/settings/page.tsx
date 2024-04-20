"use client";
import SettingTabs from "@/shared/components/tabs/settings.tabs";
import useGetMembership from "@/shared/hooks/useGetMembership";
import useSettingsFilter from "@/shared/hooks/useSettingsFilter";
import { UserProfile } from "@clerk/nextjs";
import { useEffect } from "react";
import Cookies from 'js-cookie'

const Page = () => {
  const { activeItem } = useSettingsFilter();
  const { data } = useGetMembership();
  useEffect(() => {
    const isApiKeyAvailable=Cookies.get('nothing')
  })
  return (
    <div className="w-full p-5">
      <SettingTabs />
      {activeItem === "Customize Profile" && (
        <div className="w-full h-screen flex justify-center">
          <UserProfile />
        </div>
      )}
      {activeItem === "API Access" && (
        <div>
          {/* //@ts-ignore */}
          {data?.plan !== "Grow" ? (
            <div className="flex justify-center items">
              <h3>Please update your subscription plan to get access of api</h3>
            </div>
          ) : (
            <div className="p-4 ">API KEY</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
