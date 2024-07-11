"use client"
import useSWR from "swr"
import { fetcher } from "../fetcher";
import Link from "next/link";
import style from "../styles/user.module.css"
import { RandomAvatar } from "react-random-avatars"

export default function BurgerMenu(){
    const { data: user } = useSWR("/api/v1/user/me", fetcher)
    const apiBack = process.env.BACKEND_API_KEY || "http://localhost:8000"
    return (
        <Link href="/user">
        {user?.profile_pic ? (<img className={style.main__logo} src={`${apiBack}${user?.profile_pic}`} alt="user-jpg" />):(<div className={style.img__user}><RandomAvatar name={user?.username} square={true} size={70} /></div>)}
        <hr/>
        </Link>
    );
}