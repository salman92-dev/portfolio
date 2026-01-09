"use client";

const CircularText = ({
  text = "SCROLL DOWN • SCROLL DOWN • ",
  radius = 80,
  size = 200,
}) => {
  const characters = text.split("");
  const degree = 360 / characters.length;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {characters.map((char, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 text-black text-2xl font-medium uppercase"
          style={{
            transform: `
              rotate(${i * degree}deg)
              translate(${radius}px)
              rotate(90deg)
            `,
            transformOrigin: "0 0",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default CircularText;
