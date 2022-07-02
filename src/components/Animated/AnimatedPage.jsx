import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -window.innerHeight },
  animate: { scale: 1, y: 0 },
  exit: { opacity: 0, y: window.innerHeight },
};
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      inherit='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
