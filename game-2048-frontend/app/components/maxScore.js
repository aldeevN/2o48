import useSWR from "swr"
import { fetcher, postScore } from "../fetcher"
import { GameContext } from "../context/game-context"
import { useContext, useEffect } from "react"

import { AuthActions } from "../api/auth/utils";

export default function maxScore() {
    // const { postMaxScore } = AuthActions()
    const { score } = useContext(GameContext)
    const { data: user } = useSWR("/api/v1/user/me", fetcher)
    // useEffect(() => {
    //     if (user?.max_score > score) {
    //         postMaxScore(score)
    //     }
    // })

    return (
        <div >{user?.max_score > score ? "postScore()" : score}</div>
    )
}
