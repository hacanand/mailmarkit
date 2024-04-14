'use client'

import { getSubscribers } from "@/actions/get.subscribers";
import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";
 
const useSubscribersData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useClerk();
  useEffect(() => {
      GetSubscribers();
  }, [user])

  const GetSubscribers = async () => {
     await getSubscribers({ newsLetterOwnerId: user?.id! }).then((res:any) => {
       setData(res);
       setLoading(false);
     }).catch((error) => {
       setLoading(false);
     });
  }
  return { data, loading };
  }


export default useSubscribersData