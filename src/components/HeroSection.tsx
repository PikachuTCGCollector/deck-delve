import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            The Ultimate Trading Card Game
          </p>
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-glow-gold text-foreground md:text-7xl lg:text-8xl">
            Master the
            <br />
            <span className="text-primary">Arcane Arts</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl font-body text-lg text-muted-foreground md:text-xl">
            Build legendary decks, summon powerful creatures, and clash with
            players worldwide in the most immersive digital card game.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-body text-base uppercase tracking-wider px-10 py-6 border-glow-gold hover:bg-primary/90"
            >
              Play Now — Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground font-body text-base uppercase tracking-wider px-10 py-6 hover:bg-secondary hover:text-secondary-foreground"
            >
              Watch Trailer
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-12 text-muted-foreground"
        >
          {[
            { num: "2M+", label: "Players" },
            { num: "500+", label: "Cards" },
            { num: "50K", label: "Daily Matches" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-primary md:text-3xl">{stat.num}</p>
              <p className="font-body text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
