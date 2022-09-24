import { useEffect, useRef } from "react";

// hook to check if component is clicked outside, for pop out notifications/errors etc.
export let useClickOutside = handler => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};
