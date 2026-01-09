import React from "react";
import SkillsLevel from "./SkillsLevel";
import Heading from "../../HelperComp/Heading";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="h-full page-shadow bg-slate-50 relative overflow-hidden flex flex-col">
      {/* Decorative */}
      <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex-1 p-4 md:p-12 flex flex-col justify-center relative z-10">
        <Heading title="My Skills" subtitle="Technical Expertise" />

        <div className="space-y-3 mt-4">
          <SkillItem name="React & React Native" percent={90} delay={0.1} />
          <SkillItem name="JavaScript / TypeScript" percent={85} delay={0.2} />
          <SkillItem name="Flutter & Dart" percent={80} delay={0.3} />
          <SkillItem name="Node.js & Backend" percent={75} delay={0.4} />
          <SkillItem name="UI/UX Design" percent={85} delay={0.5} />
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ name, percent, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-end px-1">
        <span className="font-bold text-slate-700 text-sm md:text-base font-heading">{name}</span>
        <span className="text-primary font-bold text-xs">{percent}%</span>
      </div>
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "circOut" }}
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  )
}

export default Skills;

