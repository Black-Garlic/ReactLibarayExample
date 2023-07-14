import React, { useRef, useEffect, MouseEvent, useCallback } from "react";

interface ClickOutsideProps {
  active: boolean;
  onClick: (e?: MouseEvent) => void;
  children: any;
}

const ClickOutside = ({
  active = true,
  onClick,
  children,
}: ClickOutsideProps) => {
  const innerRef = useRef();

  const isInDOM = useCallback((obj: any) => {
    return Boolean(obj.closest("body"));
  }, []);

  const hasParent = useCallback(
    (element: any, root: any) => {
      return root?.contains(element) && isInDOM(element);
    },
    [isInDOM],
  );

  const handleClick = (event: any) => {
    if (
      !hasParent(event.target, innerRef?.current) &&
      !event.target.className.includes("notOutSide")
    ) {
      if (typeof onClick === "function") {
        onClick(event);
      }
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("touchstart", handleClick);
    }

    return () => {
      if (active) {
        document.removeEventListener("mousedown", handleClick);
        document.removeEventListener("touchstart", handleClick);
      }
    };
  });

  return React.cloneElement(children, { ref: innerRef });
};

export default ClickOutside;
