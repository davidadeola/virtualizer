import { useEffect, useState, useRef } from "react";

export const useSubLoad = (containerSelector, handleLoading = false) => {
  const [loaded, setLoaded] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting } = entry;

          if (isIntersecting) {
            setLoaded(true);
            if (handleLoading === false) {
              observer = observer.disconnect();
            }
          } else if (handleLoading) {
            setLoaded(false);
          }
        });
      },
      {
        root: document.querySelector(containerSelector),
      }
    );

    observer.observe(elementRef.current);
  }, [containerSelector, handleLoading]);

  return [loaded, elementRef];
};
