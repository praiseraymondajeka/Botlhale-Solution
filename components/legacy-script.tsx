"use client";

import { useEffect } from "react";

type LegacyScriptProps = {
  src: string;
};

export default function LegacyScript({ src }: LegacyScriptProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onerror = () => {
      console.error(`Failed to load page interactions: ${src}`);
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [src]);

  return null;
}
