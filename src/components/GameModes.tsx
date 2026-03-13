import { motion } from "framer-motion";
import { Swords, Trophy, Users, Flame } from "lucide-react";

const modes = [
  { icon: Swords, title: "Ranked Duel", desc: "Climb the ladder in competitive 1v1 matches and prove your skill." },
  { icon: Users, title: "Arena Draft", desc: "Draft cards on the fly and build unique decks in real-time." },
  { icon: Trophy, title: "Tournaments", desc: "Compete in weekly tournaments for exclusive rewards and glory." },
  { icon: Flame, title: "Story Campaign", desc: "Unravel the lore of Arcane Duel through epic single-player battles." },
];

const GameModes = () => {
  return (
    <section className="relative py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Ways to Play
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Game Modes
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer rounded-lg border border-border bg-gradient-card p-8 text-center transition-all duration-300 hover:border-primary/40 hover:border-glow-gold"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <mode.icon size={28} />
              </div>
              <h3 className="mb-3 font-display text-lg font-bold text-foreground">
                {mode.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {mode.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModes;
