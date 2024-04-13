"use client";

import { subscribe } from "@/actions/add.subscribers";
import { Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const username: string = searchParams.get("username")!;

  // console.log(username)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await subscribe({ email: value, username });
      setLoading(false);
      if (res?.error) {
        toast.error(res?.error);
      } else {
        toast.success("Subscribed successfully");
      }
    } catch (error) {
        console.error("Error subscribing user: ", error);
        setLoading(false);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-7xl pb-8 capitalize">{username} Newsletter</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex  w-full max-w-md boarder rounded overflow-hidden"
      >
        <input
          type="email"
          name="email"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-4 py-4 w-full text-gray-700 border-1 border-blue-400 leading-tight focus:outline-none focus:shadow-outline "
          placeholder="Enter your email address"
        />
        <button
                  type="submit"
                    disabled={loading}
          className="px-8 bg-blue-500 text-white font-bold py-4 rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Page;
