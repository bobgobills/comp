import { forwardRef } from "react";

export interface CircleProps {
  color?: string;
}
export const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ color = "black" }: CircleProps, ref) => {
    return (
      <div
        ref={ref}
        style={{
          borderRadius: "50%",
          textAlign: "center",
          height: "100px",
          width: "100px",
          backgroundColor: color,
        }}
      />
    );
  }
);
Circle.displayName = "Circle";
