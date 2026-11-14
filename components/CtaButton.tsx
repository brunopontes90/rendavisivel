"use client";
import { CHECKOUT_URL, PRICE, PRODUCT } from "@/lib/config";
import { track } from "@/lib/pixel";

export default function CtaButton({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <a
      id={id}
      href={CHECKOUT_URL}
      onClick={() =>
        track("InitiateCheckout", {
          content_name: PRODUCT.name,
          content_ids: [PRODUCT.contentId],
          value: PRICE.full,
          currency: "BRL",
        })
      }
      className={`block w-full rounded-xl bg-[#FF7A1A] py-4 text-center text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-[#ff8a33] active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
}
