import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  containerWidthDesktop,
  mergeAnimationDuration,
  tileCountPerDimension,
} from "../../constants";
import styles from "../../styles/tile.module.css";
import usePreviousProps from "../../hooks/use-previous-props";

export default function Tile({ position, value }) {
  const isWideScreen = useMediaQuery({ minWidth: 512 });
  const containerWidth = isWideScreen
    ? containerWidthDesktop
    : containerWidthDesktop;

  const [scale, setScale] = useState(1);
  const previousValue = usePreviousProps(value);
  const hasChanged = previousValue !== value;

  const positionToPixels = (position) =>
    (position / tileCountPerDimension) * containerWidth;

  useEffect(() => {
    if (hasChanged) {
      setScale(1.1);
      setTimeout(() => setScale(1), mergeAnimationDuration);
    }
  }, [hasChanged]);

  const style = {
    left: positionToPixels(position[0]),
    top: positionToPixels(position[1]),
    transform: `scale(${scale})`,
    zIndex: value,
  };

  return (
    <div className={`${styles.tile} ${styles[`tile${value}`]}`} style={style}>
      {value}
    </div>
  );
}
