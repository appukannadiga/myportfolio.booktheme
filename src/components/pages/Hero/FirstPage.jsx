import React from "react";
import personImg from "../../../assets/profile.jpg";
import { motion } from "framer-motion";

const FirstPage = () => {
  return (
    <div className="h-full w-full bg-slate-50 page-shadow relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <main className="h-full w-full flex flex-col justify-center items-center p-4 relative z-10">
        <div className="w-full max-w-[320px] space-y-4 text-center">
          {/* Image Container with Animation */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-primary blur-sm opacity-50 animate-pulse"></div>
              <img
                src={personImg}
                alt="Manvanth Gowda M"
                className="w-32 h-32 md:w-56 md:h-56 object-cover rounded-full shadow-2xl border-4 border-white ring-4 ring-primary/20"
              />
            </div>
          </motion.div>

          {/* Text Container */}
          <div className="space-y-3 md:space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="uppercase text-xs md:text-sm tracking-[0.2em] text-slate-500 font-medium"
            >
              Hello, I am
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-5xl font-bold font-heading text-slate-800 leading-tight"
            >
              Manvanth <span className="text-primary block mt-1 md:mt-2 text-2xl md:text-5xl">Gowda M</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-slate-600 text-lg font-medium pt-2"
            >
              Full Stack Developer & UI Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-slate-500 text-sm leading-relaxed px-4 max-w-xs mx-auto"
            >
              Creating beautiful, functional digital experiences with React, Flutter, and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="pt-6"
            >
              <a
                className="premium-btn inline-block no-underline"
                href="mailto:appumanu3214@gmail.com"
              >
                Hire Me
              </a>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;

