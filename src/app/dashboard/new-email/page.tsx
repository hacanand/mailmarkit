"use client";
//import Emaileditor from "@/shared/components/editor/email.editor";
import { ICONS } from "@/shared/utils/icons";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const Emaileditor = dynamic(
  () => import("@/shared/components/editor/email.editor"),
  {
    ssr: false,
  }
);
const Page = () => {
  const searchParams = useSearchParams();
  const subject: string = searchParams.get("subject") || "";
  const subjectTitle: string = subject.replace(/-/g, " ");
  return (
    <div className="w-full flex bg-[#f7f7f7]  ">
      <div className="w-full p-5 bg-white rounded-r-xl">
        {/* back arrow */}
        <Link
          href="/dashboard/write"
          className="opacity-[.7] w-min flex text-xl items-center"
        >
          <span>{ICONS.backArrow}</span>
          <span>Exit</span>
        </Link>
        {/* email editor */}
        <div className="my-5">
          <Emaileditor subjectTitle={subjectTitle} />
        </div>
      </div>
    </div>
  );
};

export default Page;
