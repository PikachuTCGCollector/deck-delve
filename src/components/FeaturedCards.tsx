import { motion } from "framer-motion";
import cardDragon from "@/assets/card-dragon.jpg";
import cardSorceress from "@/assets/card-sorceress.jpg";
import cardAssassin from "@/assets/card-assassin.jpg";

const cards = [
  { name: "Infernal Dragon", type: "Legendary", element: "Fire", power: "9800", image: cardDragon, glowClass: "hover:border-glow-gold" },
  { name: "Frost Sovereign", type: "Epic", element: "Ice", power: "7200", image: cardSorceress, glowClass: "hover:border-glow-arcane" },
  { name: "Shadow Reaper", type: "Legendary", element: "Shadow", power: "8500", image: cardAssassin, glowClass: "hover:border-glow-arcane" },
];

const FeaturedCards = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Collection
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Featured Cards
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`group cursor-pointer overflow-hidden rounded-lg border border-border bg-gradient-card transition-all duration-300 ${card.glowClass}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
                    {card.type}
                  </span>
                  <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                    {card.element}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {card.name}
                </h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  Power: <span className="text-primary font-semibold">{card.power}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
