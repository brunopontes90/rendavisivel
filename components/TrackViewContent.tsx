"use client";
import { useEffect } from "react";
import { track } from "@/lib/pixel";
import { PRICE, PRODUCT } from "@/lib/config";

export default function TrackViewContent() {
  useEffect(() => {
    const t = setTimeout(() => {
      track("ViewContent", {
        content_name: PRODUCT.name,
        content_ids: [PRODUCT.contentId],
        content_type: "product",
        value: PRICE.full,
        currency: "BRL",
      });
    }, 1500); // wait for the pixel script to load
    return () => clearTimeout(t);
  }, []);
  return null;
}
