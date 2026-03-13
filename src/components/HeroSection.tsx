import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

      {/* Animated energy particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              width: `${100 + i * 60}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
            }}
            animate={{
              x: [0, 100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mb-6 font-body text-xs font-medium uppercase text-primary"
          >
            Shape Destiny · Command the Cosmos
          </motion.p>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
            <span className="block">FATE</span>
            <span className="block text-primary text-glow-cyan">NEXUS</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl font-body text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
            Harness the Seven Fates. Build decks across realities.
            Clash in the cosmic arena where every card reshapes the universe.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider px-10 py-6 border-glow-cyan hover:bg-primary/90 transition-all"
            >
              <Play className="mr-2 h-4 w-4" />
              Play Now — Free
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/60 text-foreground font-body text-sm uppercase tracking-wider px-10 py-6 hover:bg-secondary hover:text-secondary-foreground hover:border-primary/40"
            >
              Watch Cinematic
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 flex items-center justify-center gap-8 sm:gap-16 text-muted-foreground"
        >
          {[
            { num: "3.2M+", label: "Players" },
            { num: "700+", label: "Cards" },
            { num: "7", label: "Fates" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-xl font-bold text-primary sm:text-2xl md:text-3xl">{stat.num}</p>
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom energy line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
