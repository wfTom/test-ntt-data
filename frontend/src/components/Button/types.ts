import { ReactNode } from "react";

export type ButtonProps = {
  text: string;
  function: () => void;
  children?: ReactNode;
};
