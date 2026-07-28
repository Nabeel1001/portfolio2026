import { motion } from "framer-motion";

export const MotionWrapper = ({
  children,
  variants,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};