// components/ViewModal.jsx
import ReactDOM from "react-dom";
import * as motion from "motion/react-client";

export const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </>,
    document.getElementById("modal-root")
  );