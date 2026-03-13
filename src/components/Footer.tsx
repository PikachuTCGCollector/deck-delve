import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="font-display text-sm font-bold tracking-[0.2em] text-primary text-glow-cyan">
              FATE NEXUS
            </h2>
          </div>
          <div className="flex gap-8">
            {["Terms", "Privacy", "Support", "Discord", "Twitter"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="font-body text-[10px] text-muted-foreground tracking-wider">
            © 2026 Fate Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
