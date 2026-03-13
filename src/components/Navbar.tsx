import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Game", "Cards", "Fates", "Lore", "Community"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-2xl"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <h1 className="font-display text-xl font-bold tracking-[0.2em] text-primary text-glow-cyan">
            FATE NEXUS
          </h1>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-body text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="font-body text-xs uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-secondary">
            Log In
          </Button>
          <Button className="font-body text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 border-glow-cyan">
            Play Now
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
          className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Button className="w-full bg-primary text-primary-foreground font-body uppercase tracking-wider">
                Play Now
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
