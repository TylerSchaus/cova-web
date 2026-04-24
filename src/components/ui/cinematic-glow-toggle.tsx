"use client";
import { motion } from "framer-motion";

interface CinematicSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  labelLeft?: string;
  labelRight?: string;
}

export default function CinematicSwitch({ isOn, onToggle, labelLeft = "CAD", labelRight = "USD" }: CinematicSwitchProps) {
  return (
    <div
      className="flex items-center gap-3 cursor-pointer min-h-[44px] py-2"
      onClick={onToggle}
    >
      <span className={`text-xs font-mono tracking-wider transition-colors duration-300 ${!isOn ? "text-white" : "text-white/30"}`}>
        {labelLeft}
      </span>
      <motion.div
        className="relative w-16 h-8 rounded-full shadow-inner"
        initial={false}
        animate={{
          backgroundColor: isOn ? "#0a1628" : "#0a1628",
          borderColor: isOn ? "#0066FF" : "rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.3 }}
        style={{ border: '1px solid' }}
      >
        <motion.div
          className="absolute top-[3px] left-1 w-6 h-6 rounded-full shadow-md"
          initial={false}
          animate={{
            x: isOn ? 32 : 0,
            backgroundColor: isOn ? "#0066FF" : "rgba(255,255,255,0.4)",
            boxShadow: isOn ? "0 0 8px rgba(0,102,255,0.6)" : "none",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          whileTap={{ scale: 0.9 }}
        />
      </motion.div>
      <span className={`text-xs font-mono tracking-wider transition-colors duration-300 ${isOn ? "text-[#0066FF]" : "text-white/30"}`}
        style={isOn ? { textShadow: '0 0 8px rgba(0,102,255,0.5)' } : {}}>
        {labelRight}
      </span>
    </div>
  );
}
