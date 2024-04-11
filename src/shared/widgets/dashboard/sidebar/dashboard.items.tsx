import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants";
import useRouteChange from "@/shared/hooks/useRouteChange";
import { ICONS } from "@/shared/utils/icons";
 
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import SidebarFooterLogo from "./sidebar.footer.logo";
import { useEffect } from "react";

const DashboardItems = ({ bottomContent }: { bottomContent?: boolean }) => {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const { signOut, user } = useClerk();
    const pathName = usePathname();
    
    function LogoutHandler(){
        signOut();
        redirect("/sign-in");
    }
    useEffect(() => {
        setActiveRoute(pathName);
    }, [pathName]);
  return (
    <>
      {!bottomContent ? (
        <>
          {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              key={index}
              href={item.url}
              className="p-2 py-5 flex items-center"
            >
              <span
                className={`text-3xl mr-2 ${
                  item.url === activeRoute && "text-[#463bbd]"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-xl mr-2 ${
                  item.url === activeRoute && "text-[#463bbd]"
                } `}
              >
                {item.title}{" "}
              </span>
            </Link>
          ))}
        </>
      ) : (
        <>
          {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                key={index}
                className="p-2 py-5 flex  item-center "
                href={
                  item.url === "/"
                    ? `/subscribe?username=${user?.username}`
                    : item.url
                }
              >
                <span
                  className={`text-3xl mr-2 ${
                    item.url === activeRoute && "text-[#463bbd]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-xl mr-2 ${
                    item.url === activeRoute && "text-[#463bbd]"
                  } `}
                >
                  {item.title}
                </span>
              </Link>
            )
          )}
          {/* sign-out */}
          <div
            className="p-2 py-5 items-center flex cursor-pointer border border-b"
            onClick={LogoutHandler}
          >
            <span className="text-3xl mr-2">{ICONS.logOut} </span>
            <span className="text-xl">Sign Out</span>
          </div>
          {/* footer */}
          <br />
          <br />
          <div className="w-full flex justify-center  cursor-pointer">
            <SidebarFooterLogo />
          </div>
          <p className="text-sm text-center pt-5 pb-10 ">
            © {new Date().getFullYear()} Mailmarkit, Inc. All rights reserved.
          </p>
        </>
      )}
    </>
  );
};

export default DashboardItems;
