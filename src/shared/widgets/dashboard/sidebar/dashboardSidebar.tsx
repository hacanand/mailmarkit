'use client'

import { ICONS } from "@/shared/utils/icons"
import { useUser } from "@clerk/nextjs"
import DashboardItems from "./dashboard.items"
import UserPlan from './user.plan'
import Link from "next/link"
const DashboardSidebar = () => {
  const {user}=useUser()
  return (
    <div className="p-2 ">
      <Link href={'/'}>
        <div className="p-2 flex items-center bg-[#f5f5f5] rounded">
          <span className="text-2xl">{ICONS.home}</span>
          <h5 className="pl-2 pt-1 capitalize ">
            <span className="font-semibold">{user?.username} </span>Newsletter
          </h5>
        </div>
      </Link>
      <div>
        <DashboardItems />
        <UserPlan />
        <DashboardItems bottomContent={true} />
      </div>
    </div>
  );
}

export default DashboardSidebar