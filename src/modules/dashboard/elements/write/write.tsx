"use client";
import { ICONS } from "@/shared/utils/icons";
import { Button, divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import  { getEmails } from "@/actions/get.emails";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { deleteEmail } from "@/actions/delete.email";


const Write = () => {
  const router = useRouter();
  const [emailTitle, setEmailTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [emails, setEmails] = useState<any>([]);
  const { user } = useClerk();

  const handleCreate = () => {
    if (emailTitle.trim() === "") {
      toast.error("Please enter a valid email subject to continue.");
    } else {
      const formattedTitle = emailTitle.replace(/\s+/g, "-").replace(/&/g, "-");
      router.push(`/dashboard/new-email?subject=${formattedTitle}`);
    }
  };
  useEffect(() => {
    FindEmails();
  }, [user?.id]);

  const FindEmails = async () => {
    const response = await getEmails({ newsLetterOwnerId: user?.id! }); 
    setEmails(response);
  }
  const deleteHandler = async (id: string) => {
    await deleteEmail({ emailId: id }).then(() => {
      FindEmails();
    }
    );
  }

  return (
    <div className="w-full flex flex-wrap p-4 gap-6 relative">
      <div
        className="w-[200px] h-[200px] bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <span className="text-2xl block text-center mb-3">{ICONS.plus}</span>
        <h5 className="text-2xl">Create New</h5>
      </div>
      {/* saved emails */}
      {
        emails && emails.map((i: any) => {
          const formattedTitle = i?.title?.replace(/\+/g, "-").replace(/&/g, "-");
          return (
            <div
              className="w-[200px] h-[200px] z-[0] relative bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer group"
              key={i?._id}
            >
              <span
                className="absolute hidden text-red-400 hover:text-red-600 group-hover:block z-20 right-2 top-2 text-2xl cursor-pointer"
                onClick={() => deleteHandler(i?._id)}
              > {ICONS.delete}</span>
              <Link href={`/dashboard/new-email?subject=${formattedTitle}`} className="text-xl truncate">{i.title} </Link>
            </div>
          );
        })
    }
      {open && (
        <div className="absolute flex items-center justify-center top-0 left-0  bg-[#00000028] h-screen w-full">
          <div className="w-[600px] p-5 bg-white rounded shadow relative  ">
            <div className="absolute top-3 right-3">
              <span
                className="text-lg cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {ICONS.cross}
              </span>
            </div>
            <h5 className="text-2xl ">Enter Your Email Subject</h5>
            <input
              type="text"
              name="emailTitle"
              id="emailTitle"
              className="w-full px-2 my-2  p-2 border rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
              value={emailTitle}
              onChange={(e) => setEmailTitle(e.target.value)}
            />
            <Button
              color="primary"
              className="rounded text-2xl mt-3"
              onClick={handleCreate}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Write;
