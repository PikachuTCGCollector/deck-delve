import { motion } from "framer-motion";
import cardVoid from "@/assets/card-void.jpg";
import cardCelestial from "@/assets/card-celestial.jpg";
import cardTemporal from "@/assets/card-temporal.jpg";

const cards = [
  { name: "Void Sovereign", fate: "Oblivion", rarity: "Mythic", power: "12,400", image: cardVoid, glow: "hover:border-glow-cyan" },
  { name: "Celestial Warden", fate: "Radiance", rarity: "Legendary", power: "9,800", image: cardCelestial, glow: "hover:border-glow-purple" },
  { name: "Chrono Weaver", fate: "Temporal", rarity: "Legendary", power: "10,200", image: cardTemporal, glow: "hover:border-glow-pink" },
];

const FeaturedCards = () => {
  return (
    <section id="cards" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.4em] text-primary">
            Collection
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Featured Cards
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`group cursor-pointer overflow-hidden rounded-lg border border-border/60 bg-gradient-card transition-all duration-300 ${card.glow}`}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                <span className="absolute top-3 right-3 rounded-full border border-primary/30 bg-background/70 backdrop-blur-sm px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {card.rarity}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {card.fate} Fate
                  </span>
                  <span className="font-display text-xs text-primary font-bold">
                    ⚡ {card.power}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {card.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
