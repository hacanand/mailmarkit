'use client'
import { getMembership } from '@/actions/get.membership';
import  { useEffect, useState } from 'react'

const useGetMembership:any = () => {
    const [data, setData] = useState<any []>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        handleGetMembership();
    }, [])
    const handleGetMembership = async () => {
        await getMembership().then((res:any) => {
            setData(res);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            console.log('Error getting membership: ', error)
        });
    }
    return { data, loading };
}

export default useGetMembership