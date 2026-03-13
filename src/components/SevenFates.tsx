import { motion } from "framer-motion";
import { Flame, Snowflake, Zap, Eye, Clock, Shield, Skull } from "lucide-react";

const fates = [
  { name: "Radiance", desc: "Pure light energy that heals and shields", icon: Zap, color: "text-energy-gold" },
  { name: "Oblivion", desc: "Void power that consumes and erases", icon: Skull, color: "text-neon-cyan" },
  { name: "Temporal", desc: "Control over time and causality", icon: Clock, color: "text-neon-purple" },
  { name: "Inferno", desc: "Destructive cosmic fire and plasma", icon: Flame, color: "text-destructive" },
  { name: "Frost", desc: "Entropy and absolute zero mastery", icon: Snowflake, color: "text-neon-cyan" },
  { name: "Aegis", desc: "Unbreakable barriers and fortification", icon: Shield, color: "text-energy-gold" },
  { name: "Vision", desc: "Foresight and reality manipulation", icon: Eye, color: "text-neon-pink" },
];

const SevenFates = () => {
  return (
    <section id="fates" className="relative py-24 bg-gradient-cosmic">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.4em] text-accent">
            The Seven Paths
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            The Seven Fates
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm text-muted-foreground leading-relaxed">
            Every card belongs to one of seven cosmic Fates. Master their synergies to dominate the Nexus.
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-7">
          {fates.map((fate, i) => (
            <motion.div
              key={fate.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group cursor-pointer rounded-lg border border-border/40 bg-gradient-card p-5 text-center transition-all duration-300 hover:border-primary/30 hover:border-glow-cyan"
            >
              <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/60 ${fate.color} transition-all group-hover:bg-secondary`}>
                <fate.icon size={22} />
              </div>
              <h3 className="mb-1 font-display text-xs font-bold text-foreground tracking-wider">
                {fate.name}
              </h3>
              <p className="font-body text-[10px] leading-relaxed text-muted-foreground">
                {fate.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SevenFates;
