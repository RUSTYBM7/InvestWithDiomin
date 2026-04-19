import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

const stats: Stat[] = [
  { label: "AUM Under Management", value: "$2.8B", suffix: "+" },
  { label: "Active Client Families", value: "200", suffix: "+" },
  { label: "Average Client ROI", value: "12.5", suffix: "%" },
  { label: "Tax Savings Delivered", value: "$340M", suffix: "+" },
  { label: "Years of Expertise", value: "15", suffix: "+" },
  { label: "Successful Exits Advised", value: "47", suffix: "" },
];

export function RotatingStats() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentStat = stats[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={currentIndex}
    >
      <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
        <CardContent className="p-8 text-center">
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            {currentStat.label}
          </p>
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-5xl font-bold text-primary"
          >
            {currentStat.value}
            <span className="text-3xl">{currentStat.suffix}</span>
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
