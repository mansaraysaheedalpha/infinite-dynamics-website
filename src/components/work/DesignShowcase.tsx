// src/components/work/DesignShowcase.tsx

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { DesignTemplate } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TemplateCustomizer from "./TemplateCustomizer";

interface DesignShowcaseProps {
  templates: DesignTemplate[];
}

const DesignShowcase = ({ templates }: DesignShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTemplate, setSelectedTemplate] =
    useState<DesignTemplate | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(templates.map((t) => t.category));
    return ["All", ...Array.from(cats)];
  }, [templates]);

  const filteredTemplates = useMemo(() => {
    if (activeCategory === "All") {
      return templates;
    }
    return templates.filter((t) => t.category === activeCategory);
  }, [templates, activeCategory]);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredTemplates.map((template) => (
            <motion.button
              key={template.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="group text-left"
              onClick={() => setSelectedTemplate(template)}
            >
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border shadow-md group-hover:shadow-xl transition-shadow">
                <Image
                  src={template.imageUrl}
                  alt={template.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold text-lg text-center">
                    {template.title}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <Dialog
        open={!!selectedTemplate}
        onOpenChange={(isOpen) => !isOpen && setSelectedTemplate(null)}
      >
        {/* ✅ FIX: Added flexbox classes to control height and scrolling */}
        <DialogContent className="max-w-6xl w-[95%] h-[90vh] flex flex-col">
          {selectedTemplate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedTemplate.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedTemplate.category}
                </DialogDescription>
              </DialogHeader>
              <Tabs
                defaultValue="details"
                className="w-full flex-1 flex flex-col min-h-0"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger
                    value="customize"
                    disabled={selectedTemplate.id !== "recruitment-01"}
                  >
                    Customize
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="details"
                  className="mt-4 flex-1 overflow-y-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden">
                      <Image
                        src={selectedTemplate.imageUrl}
                        alt={selectedTemplate.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">
                          Design DNA
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          The core elements that bring this design to life.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Typography</h4>
                          <p className="text-muted-foreground text-sm">
                            {selectedTemplate.designDna.typography.join(" / ")}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Color Palette</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedTemplate.designDna.colorPalette.map(
                              (color) => (
                                <div
                                  key={color}
                                  className="flex items-center gap-2"
                                >
                                  <div
                                    className="h-5 w-5 rounded-full border"
                                    style={{ backgroundColor: color }}
                                  />
                                  <span className="text-sm font-mono">
                                    {color}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium">Principles</h4>
                          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mt-2">
                            {selectedTemplate.designDna.principles.map(
                              (principle) => (
                                <li key={principle}>{principle}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="customize" className="mt-4 flex-1 min-h-0">
                  <TemplateCustomizer />
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DesignShowcase;
