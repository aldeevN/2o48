"use client"
import useSWR from "swr"
import { fetcher } from "../fetcher";
import Link from "next/link";
import style from "./../../styles/user.module.css"

export default function BurgerMenu(){
    const { data: user } = useSWR("/api/v1/user/me", fetcher)
    const apiBack = process.env.BACKEND_API_KEY
    return (
        <Link href="/user">
        {user?.profile_pic ? (<img className={style.main__logo} src={`${apiBack}${user?.profile_pic}`} alt="user-jpg" />):(<div className={style.main__logo}><RandomAvatar square={true} size={200} /></div>)}
        <hr/>
        </Link>
    );
}