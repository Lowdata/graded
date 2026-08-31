"use client";

interface PixelTextProps {
  children: React.ReactNode;
  size?: "xxs" | "xs" | "sm";
  color?: string;
  className?: string;
  as?: "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4";
}

const sizeMap = {
  xxs: "text-[0.45rem]",
  xs: "text-[0.55rem]",
  sm: "text-[0.65rem]",
};

export default function PixelText({
  children,
  size = "xs",
  className = "",
  as: Tag = "span",
}: PixelTextProps) {
  return (
    <Tag
      className={`font-pixel tracking-wider leading-relaxed ${sizeMap[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
