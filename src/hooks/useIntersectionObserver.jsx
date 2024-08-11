import { useEffect } from "react";

const useIntersectionObserver = ({ refs, updateElement, options = {} }) => {
  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      let element = entry.target;
      if (entry) {
        updateElement?.({ element, entry });
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(intersectionCallback, options);

    Array.from(refs?.current)?.forEach((el) => {
      el && observer.observe(el);
    });

    return () => {
      Array.from(refs?.current)?.forEach((el) => {
        el && observer?.unobserve(el);
      });
    };
  }, [refs.current, intersectionCallback]);

  // observer.observe();
};

export default useIntersectionObserver;
