import { useEffect, useRef } from "react";

export function useOuteSideClick(handler) {
  const ref = useRef();
  useEffect(
    function () {
      function handelCloseModalBody(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handelCloseModalBody, true);
      return () =>
        document.removeEventListener("click", handelCloseModalBody, true);
    },
    [handler]
  );

  return ref;
}
