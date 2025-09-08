// src/components/sections/SubscriptionCTA.tsx

"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { subscribeUser } from "@/app/actions";
import { toast } from "sonner"; 
import { useState } from "react";

const SubscriptionCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // 1. Add loading state

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // 2. Set loading to true

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    try {
      const result = await subscribeUser(email);
       if (result.success) {
         toast.success(result.message);
         (event.target as HTMLFormElement).reset();
       } else {
         toast.error(result.message);
       }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false); // 4. Set loading back to false
    }
  };

  return (
    <motion.section
      className="mt-24 bg-card border rounded-lg p-8 md:p-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">
            Stay Ahead of the Curve
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Subscribe to Infinite Insights to receive the latest in technology,
            architecture, and design principles directly to your inbox.
          </p>
        </div>
        <div>
          <form
            className="flex w-full items-center space-x-2"
            onSubmit={handleSubmit}
          >
            <Input
              name="email"
              type="email"
              placeholder="your.email@example.com"
              className="h-12"
              required
              disabled={isSubmitting} // 5. Disable input while submitting
            />
            <Button
              type="submit"
              size="lg"
              className="h-12"
              disabled={isSubmitting} // 6. Disable button while submitting
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default SubscriptionCTA;
