import { useEffect, useRef, useState } from "react";

// Cascade reveal wrapper: fades children up on first viewport entry.
// index staggers siblings by --reveal-stagger (50ms) steps.
export default function Reveal({
  as: Tag = "div",
  index = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  const classes = `reveal${shown ? " is-in" : ""}${className ? ` ${className}` : ""}`;
  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ "--reveal-i": index, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
