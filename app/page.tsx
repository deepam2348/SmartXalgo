// app/page.tsx
"use client";

import { motion } from "framer-motion";
import { Wrench, Clock } from "lucide-react";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-8 rounded-2xl bg-gray-800/60 backdrop-blur-lg shadow-xl"
      >
        <motion.div
          initial={{ rotate: -20 }}
          animate={{ rotate: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
          className="flex justify-center mb-6"
        >
          <Wrench className="w-16 h-16 text-yellow-400" />
        </motion.div>

        <h1 className="text-4xl font-bold mb-3">We’ll Be Back Soon</h1>
        <p className="text-gray-300 mb-6">
          Our website is currently undergoing scheduled maintenance.
          <br />
          Thank you for your patience!
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <Clock className="w-4 h-4" />
          <span>Estimated downtime: few hours</span>
        </div>
      </motion.div>
    </div>
  );
}
