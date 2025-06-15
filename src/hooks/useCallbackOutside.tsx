import { useEffect } from "react";

export default function useClickOutside(elementRef:any, handler:any) {
  useEffect(() => {
    const cb = (e:any) => {
      if (!elementRef.current?.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", cb);

    return () => {
      document.removeEventListener("mousedown", cb);
    };
  }, [elementRef, handler]);
}
