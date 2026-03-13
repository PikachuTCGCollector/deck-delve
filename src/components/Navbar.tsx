import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Play", "Cards", "Decks", "Leaderboard", "Shop"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="font-display text-2xl font-bold tracking-wider text-primary text-glow-gold">
          ARCANE DUEL
        </h1>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="font-body uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-secondary">
            Log In
          </Button>
          <Button className="font-body uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 border-glow-gold">
            Play Free
          </Button>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Button className="w-full bg-primary text-primary-foreground font-body uppercase tracking-wider">
                Play Free
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
