const count = 7;
const style = {
  height: "30px",
  width: "30px",
};

export const BuildCounter = () => <div style={style}>{count}</div>;
BuildCounter.displayName = "BuildCounter";
