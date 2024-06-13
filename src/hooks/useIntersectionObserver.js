import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver({
  root = null,
  rootMargin = "0px",
  threshold = [0],
  once = false,
  willTransform = false,
}) {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);
  const [willChange, setWillChange] = useState("auto"); // https://tailwindcss.com/docs/will-change

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);

        if (entry.isIntersecting && !isIntersecting && willTransform) {
          setWillChange("transform");

          setTimeout(() => {
            setWillChange("auto");
          }, 2000);
        }

        if (once && ref.current && entry.isIntersecting) {
          observer.unobserve(ref.current);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const { current } = ref;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [isIntersecting, once, root, rootMargin, threshold, willTransform]);

  return [ref, isIntersecting, willChange];
}
