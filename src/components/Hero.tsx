import { useEffect, useState } from "react";
import imagemHugo from "../assets/hugo.png";
import { MoveDown } from "lucide-react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

const AnimatedNumber = ({ value, duration = 2000 }: AnimatedNumberProps) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easeOutQuad = 1 - (1 - percentage) * (1 - percentage);

      setDisplayNumber(Math.floor(easeOutQuad * value));

      if (progress < duration) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  return <>{displayNumber}</>;
};

interface Xp {
  number: number;
  description: string;
}

const xp: Xp[] = [
  {
    number: 50,
    description: "projetos entregues",
  },
  {
    number: 6,
    description: "anos como dev frontend",
  },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen pt-19 flex flex-col relative xl:container xl:mx-auto"
    >
      <div
        style={{ animationDelay: "100ms" }}
        className="animate-fade-in-up px-2 text-center flex flex-col gap-2 mt-10 text-dark xl:text-left xl:px-40 xl:mt-40"
      >
        <p className="text-3xl xl:text-6xl font-sans">
          Olá, eu sou o{" "}
          <span className="text-primary font-serif font-bold">Hugo</span>.
        </p>
        <p className="font-light tracking-widest xl:text-3xl">
          Desenvolvedor Frontend
        </p>
      </div>

      <div
        style={{ animationDelay: "350ms" }}
        className="animate-fade-in-up text-dark px-2 flex justify-center gap-4 pt-10 xl:justify-start xl:px-40 xl:pt-15"
      >
        {xp.map((item) => (
          <div key={item.description} className="flex flex-col">
            <p className="text-5xl xl:text-7xl">
              +<AnimatedNumber value={item.number} duration={2000} />
            </p>
            <p className="max-w-25 ml-7 xl:ml-11">{item.description}</p>
          </div>
        ))}
      </div>

      <div
        style={{ animationDelay: "600ms" }}
        className="animate-fade-in-up hidden xl:flex items-center px-40 pt-10 gap-3 text-dark"
      >
        <p className="text-xl animate-pulse">Role a página</p>
        <MoveDown className="animate-pulse" />
      </div>

      <div
        style={{ animationDelay: "200ms" }}
        className="animate-fade-in absolute bottom-0 left-0 right-0 xl:left-[unset] xl:w-[60%]"
      >
        <img src={imagemHugo} alt="Hugo" />
      </div>
    </section>
  );
}
