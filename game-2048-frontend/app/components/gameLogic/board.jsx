import { useCallback, useContext, useEffect, useRef } from "react";
import styles from "../../styles/board.module.css";
import Tile from "./tile";
import { GameContext } from "../../context/game-context";

export default function Board(props) {
  const { getTiles, moveTiles, startGame } = useContext(GameContext);
  const initialized = useRef(false);
  const handleKeyDown = useCallback(
    (e) => {
      // disables page scrolling with keyboard arrows
      // e.preventDefault();

      switch (e.code) {
        case "ArrowUp":
          moveTiles("move_up");
          break;
        case "ArrowDown":
          moveTiles("move_down");
          break;
        case "ArrowLeft":
          moveTiles("move_left");
          break;
        case "ArrowRight":
          moveTiles("move_right");
          break;
      }
    },
    [moveTiles],
  );


  const renderGrid = () => {
    const cells = [];
    const totalCellsCount = 16;

    for (let index = 0; index < totalCellsCount; index += 1) {
      cells.push(<div className={styles.cell} key={index} />);
    }
    return cells;
  };

  const renderTiles = () => {
    return getTiles().map((tile) => (
      <Tile key={`${tile.id}`} {...tile} />
    ));
  };

  useEffect(() => {
    if (initialized.current === false) {
      startGame();
      initialized.current = true;
    }
  }, [startGame]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.border__container}>
      <div className={styles.board}>
        <div className={styles.tiles}>{renderTiles()}</div>
        <div className={styles.grid}>{renderGrid()}</div>
      </div>
    </div>
  );
}
