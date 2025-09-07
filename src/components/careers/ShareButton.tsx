// src/components/careers/ShareButton.tsx

"use client";

import { useState, useEffect } from "react"; // 1. Import useEffect
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/Button";
import {
  Share2,
  Linkedin,
  Twitter,
  Link as LinkIcon,
  Check,
} from "lucide-react";

interface ShareButtonProps {
  title: string;
  slug: string;
}

export const ShareButton = ({ title, slug }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState(""); // 2. Store the URL in state, initially empty

  // 3. Use useEffect to safely access `window` only on the client
  useEffect(() => {
    // This code runs only in the browser after the component mounts
    const fullUrl = `${window.location.origin}/careers/${slug}`;
    setUrl(fullUrl);
  }, [slug]); // Dependency array ensures this runs if the slug ever changes

  const shareOptions = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
    },
  ];

  const handleCopy = () => {
    if (!url) return; // Guard against copying an empty URL
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // We can disable the button until the URL is ready on the client
  if (!url) {
    return (
      <Button variant="outline" disabled>
        <Share2 className="mr-2 h-4 w-4" />
        Share this role
      </Button>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          Share this role
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2" align="end">
        <div className="flex flex-col gap-1">
          {shareOptions.map((option) => (
            <a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md p-2 text-sm hover:bg-accent"
            >
              {option.icon}
              <span>{option.name}</span>
            </a>
          ))}
          <div className="my-1 h-px bg-border" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-3 p-2 text-sm"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <LinkIcon className="h-5 w-5" />
            )}
            <span>{copied ? "Copied!" : "Copy link"}</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
