"use client";

import { createUseStyles } from "react-jss";

type StyleProps = {
  color?: string;
  bg?: string;
};

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    gap: "6px",

    width: "fit-content",
    paddingInline: "8px",
    background: (props: StyleProps) => props.bg ?? "#F2F2F2",
    borderRadius: "4px",
  },
  text: {
    fontFamily: "Poppins",
    textWrap: "nowrap",
    fontSize: "12px",
    color: (props: StyleProps) => props.color ?? "#5F6C7B",
  },
  colorCircle: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: (props: StyleProps) => props.color ?? "#5F6C7B",
  },
});
