const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="font-display text-xl font-bold tracking-wider text-primary text-glow-gold">
            ARCANE DUEL
          </h2>
          <div className="flex gap-8">
            {["Terms", "Privacy", "Support", "Discord"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Arcane Duel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
