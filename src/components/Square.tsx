import { forwardRef } from "react";

export interface SquareProps {
  color?: string;
}
export const Square = forwardRef<HTMLDivElement, SquareProps>(
  ({ color = "black" }: SquareProps, ref) => {
    return (
      <div
        ref={ref}
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: color,
          border: "1px solid silver",
          textAlign: "center",
        }}
      />
    );
  }
);
Square.displayName = "Square";
