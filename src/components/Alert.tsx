import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
  timeout?: number;
  type?: "error" | "warning" | "info";
}
//

export default function Alert(props: Props) {
  const { children, className, timeout, type } = props;

  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, timeout || 3000);

  const classes = twMerge(
    "fixed top-2 right-2 z-50 bg-red-500 text-white p-4 rounded-lg shadow-md",
    type === "error" && "bg-red-500",
    type === "warning" && "bg-yellow-500",
    type === "info" && "bg-blue-500",
    className
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className={classes}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
