"use client";
import { useStyles } from "./styles";

export const Tag = ({
  color,
  bg,
  text,
}: {
  color?: string;
  bg?: string;
  text: string;
}) => {
  const classes = useStyles({ color, bg });
  return (
    <div className={classes.container}>
      <div className={classes.colorCircle}></div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};
