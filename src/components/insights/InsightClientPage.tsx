// src/components/insights/InsightsClientPage.tsx

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search, Inbox } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { urlFor } from "@/lib/sanity";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SanityPost } from "@/types"; // 1. Import our SanityPost type

const categories = [
  "All",
  "Architecture",
  "Design Principles",
  "Security",
  "AI",
  "Scalability",
];

// 2. Define the component's props with our specific types instead of 'any'
interface InsightsClientPageProps {
  articles: SanityPost[];
  featuredPost: SanityPost;
}

const InsightsClientPage = ({
  articles,
  featuredPost,
}: InsightsClientPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredAndSortedArticles = useMemo(() => {
    return articles
      .filter((article) => {
        const categoryMatch =
          selectedCategory === "All" || article.category === selectedCategory;
        const searchMatch =
          searchTerm === "" ||
          article.title.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return sortBy === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [articles, selectedCategory, searchTerm, sortBy]);

  return (
    <>
      {/* Featured Post Hero Section */}
      <motion.section
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card border rounded-xl overflow-hidden p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-4">
          <p className="font-semibold text-brand-yellow">Featured Insight</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {featuredPost.title}
          </h2>
          <div className="flex items-center gap-4 pt-4">
            <Image
              src={urlFor(featuredPost.author.image).width(80).url()}
              alt={featuredPost.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-foreground">
                {featuredPost.author.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {new Date(featuredPost.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
            </div>
          </div>
          <Button asChild className="mt-4">
            {/* 3. Correct the link href to use .slug.current */}
            <Link href={`/insights/${featuredPost.slug.current}`}>
              Read The Article
            </Link>
          </Button>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden">
          <Image
            src={urlFor(featuredPost.mainImage).width(1200).url()}
            alt={featuredPost.title}
            fill
            className="object-cover"
          />
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section
        className="my-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-1/3">
            <Input
              placeholder="Search insights..."
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-grow flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px] h-12">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Sort by: Newest</SelectItem>
              <SelectItem value="oldest">Sort by: Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.section>

      {/* Articles Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        {filteredAndSortedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedArticles.map((article) => (
              <Link
                href={`/insights/${article.slug.current}`} // 3. Correct href
                key={article._id} // 4. Use the unique article._id for the key
                className="bg-card border rounded-lg overflow-hidden group transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={urlFor(article.mainImage).width(600).url()}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <p className="font-semibold text-brand-yellow text-sm">
                    {article.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-card-foreground flex-grow">
                    {article.title}
                  </h3>
                  <div className="mt-4 pt-4 border-t flex items-center gap-3">
                    <Image
                      src={urlFor(article.author.image).width(64).url()}
                      alt={article.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {article.author.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(article.publishedAt).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card border rounded-lg">
            <Inbox className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              No insights found
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {/* 5. Fix unescaped quotes */}
              Your search for &quot;{searchTerm}&quot; in the &quot;
              {selectedCategory}&quot; category returned no results.
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </motion.section>
    </>
  );
};

export default InsightsClientPage;
