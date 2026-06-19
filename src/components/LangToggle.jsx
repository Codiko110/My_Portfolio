import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

function LangToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 flex items-center bg-base-300 rounded-lg overflow-hidden shadow-lg border border-base-300"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => language !== "en" && toggleLanguage()}
        className={`px-3 py-1.5 text-sm font-bold transition-colors duration-200 ${
          language === "en"
            ? "bg-primary text-primary-content"
            : "bg-base-300 text-base-content/50 hover:text-base-content"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => language !== "fr" && toggleLanguage()}
        className={`px-3 py-1.5 text-sm font-bold transition-colors duration-200 ${
          language === "fr"
            ? "bg-primary text-primary-content"
            : "bg-base-300 text-base-content/50 hover:text-base-content"
        }`}
      >
        FR
      </button>
    </motion.div>
  );
}

export default LangToggle;
