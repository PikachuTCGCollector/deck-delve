import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const LorePreview = () => {
  return (
    <section id="lore" className="relative py-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.4em] text-accent">
              The Story
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              The Nexus Awakens
            </h2>
            <div className="space-y-4 font-body text-sm leading-relaxed text-muted-foreground">
              <p>
                In the void between realities, the Nexus pulses — an ancient convergence point
                where seven cosmic Fates intertwine. For millennia, the Fatebinders maintained balance,
                channeling each Fate's energy through sacred cards etched with stellar runes.
              </p>
              <p>
                But the Seventh Seal has shattered. The Fates bleed into one another, creating
                unstable fusions of power never meant to exist. Champions from across the multiverse
                are drawn to the Nexus, each seeking to harness the chaos — or restore order.
              </p>
              <p className="text-foreground/80 font-medium">
                Your cards are your destiny. Your deck is your doctrine. The Nexus will decide
                who is worthy.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-8 border-accent/40 text-accent font-body text-xs uppercase tracking-wider hover:bg-accent/10 hover:border-accent/60"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Explore Full Lore
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Lore timeline */}
            <div className="space-y-6">
              {[
                { era: "Era I", title: "The Binding", desc: "Seven Fatebinders forge the Nexus to contain cosmic entropy." },
                { era: "Era II", title: "The Radiant War", desc: "Radiance and Oblivion clash, splitting reality into fractured shards." },
                { era: "Era III", title: "The Sealed Age", desc: "The Seven Seals lock each Fate, bringing fragile peace across dimensions." },
                { era: "Era IV", title: "The Shattering", desc: "The Seventh Seal breaks. The Nexus calls new champions. Your story begins." },
              ].map((era, i) => (
                <motion.div
                  key={era.era}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="relative pl-8 border-l border-border/40"
                >
                  <div className="absolute left-0 top-1 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    {era.era}
                  </span>
                  <h4 className="mt-1 font-display text-sm font-bold text-foreground">
                    {era.title}
                  </h4>
                  <p className="mt-1 font-body text-xs text-muted-foreground leading-relaxed">
                    {era.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LorePreview;
