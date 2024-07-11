import { useContext } from "react";
import { GameContext } from "../../context/game-context";
import { AuthActions } from "../../api/auth/utils";
import fetcher from "../../fetcher"
import useSWR from "swr"
import styles from "../../styles/score.module.css"

export default function Score() {
  const { data: user } = useSWR("/api/v1/user/me", fetcher)
  const {postScore } = AuthActions()
  const { score } = useContext(GameContext);
  if(score > user?.max_score){
    postScore(score)
    setTimeout(5000)
  }
  
  return (
    <div className={styles.score}>
      Счет: <div className={styles.score__number}>{score}</div>
    </div>
  );
  }
