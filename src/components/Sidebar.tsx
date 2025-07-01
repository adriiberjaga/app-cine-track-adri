import { motion } from "motion/react";

import Menu from "./Menu";

export default function Sidebar() {
  return (
    <motion.div
      initial={{
        x: "100%",
        opacity: 0,
        scale: 0,
        transformOrigin: "top right",
      }}
      animate={{ x: 0, opacity: 1, scale: 1, transformOrigin: "top right" }}
      exit={{ x: "100%", opacity: 0, scale: 0, transformOrigin: "top right" }}
      className="md:hidden border-2 border-white bg-white/60 backdrop-blur-2xl  shadow-xl px-8 py-12 fixed z-10 top-30 right-0 rounded-xl"
    >
      <Menu direction="vertical" />
    </motion.div>
  );
}
