// src/components/sections/SubscriptionCTA.tsx

"use client";

import { Motion } from "../layout/Motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { subscribeUser } from "@/app/actions";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react"; // Import a loader icon

const SubscriptionCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

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
      // ✅ This is the corrected block
      console.error("Subscription failed:", error); // Log the technical error for us
      toast.error("An unexpected error occurred. Please try again."); // Show a simple message to the user
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Motion
      type="section"
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
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              size="lg"
              className="h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </div>
      </div>
    </Motion>
  );
};

export default SubscriptionCTA;
