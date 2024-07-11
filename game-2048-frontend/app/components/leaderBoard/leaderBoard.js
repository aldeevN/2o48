"use client"
import style from "./../../styles/leaderBoard.module.css"
import Image from "next/image"
import useSWR from "swr"
import { fetcher } from "../../fetcher";
import closeIcon from "../../../img/close.svg"

export default function LeaderBoard(props) {
    const { data: users } = useSWR("/api/v1/game_2048/game_score/", fetcher)
    const apiBack = process.env.BACKEND_API_KEY

    return (
        <div className={style.container} >
             <button onClick={() => {props.onClose()}} className={style.closeBtn} style={{
            }}>
            <Image src={closeIcon} alt="close-btn" />
            </button>
            <h1 className={style.containerTitle}>Список лидеров:</h1>
            <div>
            <ol className={style.containerList}>
                {users?.map((user,i=1) => {
                    return <li key={user.username}>
                        <img 
                            src={user.profile_picture ? `${apiBack}/media/${user.profile_picture}` : "/none-user.png"}
                            alt="user photo"
                            width={140} height={140} style={{ borderRadius: "21px", marginRight: "35px" }} />
                        <span className={style.username}>{user.username}:</span>
                        <span className={style.userscore}>{user.score}</span>
                        </li>
                })}
                <hr className={style.hrLine}/>
            </ol>
            </div>
        </div>
    )
}