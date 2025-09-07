"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const cultureImages = [
  "/team-culture.png",
  "/culture-deep-work.jpg", // Replace with more real culture photos
  "/culture-collaboration.jpg",
];

const CultureSection = () => {
  return (
    <section className="mt-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground">
          Life at Infinite Dynamics
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          A culture of innovation, growth, and global impact.
        </p>
      </div>
      <Carousel
        className="w-full max-w-4xl mx-auto mt-12"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {cultureImages.map((src, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="relative aspect-video flex items-center justify-center p-6">
                  <Image
                    src={src}
                    alt={`Culture image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CultureSection;
