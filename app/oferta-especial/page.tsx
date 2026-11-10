import type { Metadata } from "next";
import Script from "next/script";
import { UPSELL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Oferta especial | Protocolo Fôlego",
  robots: { index: false, follow: false }, // buyers-only page, keep it out of search engines
};

const beneficios = [
  ["Plano personalizado em 10 minutos", "a IA organiza todas as suas dívidas e diz exatamente o que pagar, quando e quanto."],
  ["10 prompts avançados para casos difíceis", "nome sujo, cobrança indevida, consignado, portabilidade e reclamação no Procon."],
  ["Módulo de dívidas complexas", "como juntar todas as dívidas numa repactuação só, pela Lei do Superendividamento."],
];

export default function OfertaEspecial() {
  const id = UPSELL.kiwifyId;
  return (
    <main className="min-h-screen bg-[#0B1F3A] px-5 py-8 text-white">
      <div className="mx-auto max-w-xl">
        {/* Progress bar: signals the order is not finished yet */}
        <div className="rounded-lg bg-white/10 p-3 text-center text-sm">
          <p className="font-semibold text-orange-300">✅ Compra aprovada! Falta só 1 passo…</p>
          <div className="mt-2 h-2 w-full rounded-full bg-white/10">
            <div className="h-2 w-[85%] rounded-full bg-[#FF7A1A]" />
          </div>
        </div>

        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-wide text-orange-300">
          Oferta única · só nesta página
        </p>
        <h1 className="mt-2 text-center text-3xl font-extrabold leading-tight">
          Espere! Quer que a IA monte seu{" "}
          <span className="text-[#FF7A1A]">plano de quitação completo?</span>
        </h1>
        <p className="mt-4 text-center text-slate-300">
          Conheça o <strong>Negociador IA Pro</strong>: o nível avançado para quem quer
          resolver tudo de uma vez, sem adivinhação.
        </p>

        <ul className="mt-8 space-y-3">
          {beneficios.map(([t, d]) => (
            <li key={t} className="rounded-xl bg-white/5 p-4">
              <p className="font-bold">✅ {t}</p>
              <p className="mt-1 text-sm text-slate-300">{d}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl bg-white p-6 text-center text-[#0B1F3A]">
          <p className="text-sm text-slate-500">
            de <span className="line-through">{UPSELL.anchor}</span>
          </p>
          <p className="text-4xl font-extrabold text-[#16A34A]">por {UPSELL.price}</p>
          <p className="mt-1 text-xs text-slate-500">em 1 clique, sem digitar o cartão de novo</p>

          {/* ===== KIWIFY ONE-CLICK UPSELL =====
              Element IDs follow the pattern of the Kiwify embed code.
              Set UPSELL.kiwifyId in lib/config.ts to the real upsell ID. */}
          <div id={`kiwify-upsell-${id}`} data-upsell-url="" data-downsell-url="" className="mt-5">
            <button
              id={`kiwify-upsell-trigger-${id}`}
              type="button"
              className="block w-full rounded-xl bg-[#FF7A1A] py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition active:scale-95"
            >
              SIM, QUERO O PRO POR R$ 97 →
            </button>
            <div
              id={`kiwify-upsell-cancel-trigger-${id}`}
              className="mt-4 cursor-pointer text-sm text-slate-500 underline"
            >
              Não, obrigado. Vou montar meu plano sozinho.
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-white/5 p-4 text-sm text-slate-300">
          <span className="text-2xl">🔒</span>
          <p>
            <strong className="text-white">Garantia de 7 dias.</strong> Se não for para você,
            peça o reembolso e devolvemos 100%.
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Protocolo Fôlego · pagamento processado com segurança pela Kiwify
        </p>
      </div>
      <Script src="https://snippets.kiwify.com/upsell/upsell.min.js" strategy="afterInteractive" />
    </main>
  );
}
