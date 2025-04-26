const Drawing = ({ part, all = 1, color = "brown" }) => {
  const percent = 100 * (part / all);

  return (
    <div
      className="inline-block relative lg:m-4 m-2 h-20 w-20"
      style={{
        transform: "rotate(180deg)",
        clipPath: "circle(40px)",
      }}
    >
      <div
        style={{
          height: `${percent}%`,
          backgroundColor: color,
        }}
      />
      <div
        className="border border-black dark:border-gray-300 h-20 w-20"
        style={{
          borderRadius: "50%",
          position: "absolute",
          bottom: "0px",
        }}
      />
    </div>
  );
};
export default Drawing;
