// src/components/work/TemplateCustomizer.tsx

"use client";

import { useRef, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { useTemplateCanvas } from "@/hook/useTemplateCanvas";

const TemplateCustomizer = () => {
  // Ensure the ref is typed to allow null to match the hook
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { addText, updateText } = useTemplateCanvas(canvasRef);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      addText(
        "WE ARE HIRING!",
        {
          left: 50,
          top: 150,
          width: 700,
          fontSize: 100,
          fontWeight: "bold",
          fill: "white",
          textAlign: "left",
        },
        "headline"
      );

      addText(
        "Join us on a journey of growth and success. Apply now!",
        {
          left: 50,
          top: 300,
          width: 700,
          fontSize: 30,
          fill: "white", // Adjusted 'top' for better layout
        },
        "subheadline"
      );

      addText(
        "JOIN OUR BEST TEAM",
        {
          left: 50,
          top: 450,
          width: 300,
          fontSize: 24,
          fontWeight: "bold",
          fill: "white",
          backgroundColor: "#E63946",
          padding: 20, // Adjusted 'top'
        },
        "cta"
      );
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [addText]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
      {/* Editor Panel */}
      <div className="lg:col-span-1 bg-card p-6 border rounded-lg space-y-4">
        <div>
          <Label htmlFor="headline">Headline</Label>
          <Input
            id="headline"
            defaultValue="WE ARE HIRING!"
            onChange={(e) => updateText("headline", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="subheadline">Sub-headline</Label>
          <Input
            id="subheadline"
            defaultValue="Join us on a journey of growth and success. Apply now!"
            onChange={(e) => updateText("subheadline", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="cta">Call to Action Button</Label>
          <Input
            id="cta"
            defaultValue="JOIN OUR BEST TEAM"
            onChange={(e) => updateText("cta", e.target.value)}
          />
        </div>
        <Button className="w-full">Download Your Design</Button>
      </div>

      {/* Canvas Area */}
      <div className="lg:col-span-2 bg-muted rounded-lg flex items-center justify-center p-4 overflow-auto">
        <canvas ref={canvasRef} id="template-canvas" />
      </div>
    </div>
  );
};

export default TemplateCustomizer;
