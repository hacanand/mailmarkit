"use client";
import { Button, Link } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";

const Toolbar = () => {
  const { user } = useUser();
   
  return (
    <>
      <Link href={"/dashboard/write"}>
      <Button color="primary" className="text-lg font-semibold" >
        Start Trial
      </Button>
      </Link>
      {user ? (
        <>
          <Link href={"/dashboard"}>
            <Image
              src={user?.imageUrl}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
        </>
      ) : (
        <Link
          href="/sign-in"
          className="text-lg font-semibold border-2 p-1 px-2 border-blue-600 rounded-xl hover:bg-blue-100"
        >
          Login
        </Link>
      )}
      {/* <Link href={"/sign-up"} className="text-lg font-semibold border-2 p-1 px-2 border-blue-600 rounded-xl hover:bg-blue-100">
          Login
        </Link> */}
    </>
  );
};

export default Toolbar;
