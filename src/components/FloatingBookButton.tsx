import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FloatingBookButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        window.open("https://riseandhealpsychotherapy.janeapp.com/", "_blank")
      }
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold shadow-xl rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base hover:shadow-2xl transition-all duration-300"
    >
      Book Consultation
    </motion.button>
  );
}
