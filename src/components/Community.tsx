import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Trophy, Users, Twitch } from "lucide-react";

const stats = [
  { icon: Users, value: "3.2M", label: "Active Players" },
  { icon: Trophy, value: "12K", label: "Tournaments" },
  { icon: MessageCircle, value: "500K", label: "Discord Members" },
  { icon: Twitch, value: "85K", label: "Live Viewers" },
];

const Community = () => {
  return (
    <section id="community" className="relative py-24 bg-gradient-cosmic">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.4em] text-primary">
            Join the Fight
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Community
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm text-muted-foreground leading-relaxed">
            Join millions of players shaping the future of Fate Nexus. Compete, create, and connect.
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-border/40 bg-gradient-card p-6 text-center"
            >
              <stat.icon className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="font-display text-2xl font-bold text-foreground md:text-3xl">{stat.value}</p>
              <p className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border/40 bg-gradient-card p-8 md:p-12 text-center"
        >
          <h3 className="mb-3 font-display text-xl font-bold text-foreground md:text-2xl">
            Ready to Shape Your Fate?
          </h3>
          <p className="mx-auto mb-8 max-w-md font-body text-sm text-muted-foreground">
            Download now and receive 10 free card packs. Your legend in the Nexus begins today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-primary text-primary-foreground font-body text-xs uppercase tracking-wider px-8 py-5 border-glow-cyan hover:bg-primary/90">
              Download Free
            </Button>
            <Button variant="outline" className="border-border/60 text-foreground font-body text-xs uppercase tracking-wider px-8 py-5 hover:bg-secondary">
              Join Discord
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
