import { cn } from "../../lib/utils";

interface TransformProps {
  className?: string;
  children: React.ReactNode;
  scale?: number;
  rotate?: number;
  translate?: {
    x?: number | string;
    y?: number | string;
  };
}

export function Transform({
  className,
  children,
  scale = 1,
  rotate = 0,
  translate = { x: 0, y: 0 },
}: TransformProps) {
  const transformStyle = {
    transform: `scale(${scale}) rotate(${rotate}deg) translate(${translate.x}, ${translate.y})`,
  };

  return (
    <div className={cn("transition-transform duration-300", className)} style={transformStyle}>
      {children}
    </div>
  );
}