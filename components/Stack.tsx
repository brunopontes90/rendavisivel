import CtaButton from "./CtaButton";
import { PRICE } from "@/lib/config";

const items = [
  { name: "Protocolo Fôlego (3 fases completas)", desc: "Do diagnóstico à primeira reserva, em PDFs leves para celular.", value: "297" },
  { name: "⭐ Negociador IA", desc: "Prompts prontos por banco e tipo de dívida: rotativo, financiamento, consignado e nome sujo.", value: "197" },
  { name: "Bônus 1: 50 Scripts de Negociação", desc: "O que falar (e o que nunca falar) para o banco.", value: "97" },
  { name: "Bônus 2: Planilha Ordem de Ataque", desc: "Mostra qual dívida pagar primeiro.", value: "67" },
  { name: "Bônus 3: Guia Seus Direitos", desc: "CDC e Lei do Superendividamento explicados de forma simples.", value: "47" },
];

export default function Stack() {
  return (
    <section id="oferta" className="bg-[#0B1F3A] px-5 py-14 text-white">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center text-2xl font-extrabold">Tudo o que você recebe hoje</h2>
        <ul className="mt-8 space-y-3">
          {items.map((i) => (
            <li key={i.name} className="flex items-start justify-between gap-3 rounded-xl bg-white/5 p-4">
              <div>
                <p className="font-semibold">✅ {i.name}</p>
                <p className="mt-1 text-sm text-slate-300">{i.desc}</p>
              </div>
              <span className="shrink-0 text-sm text-slate-400 line-through">R$ {i.value}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-2xl bg-white p-6 text-center text-[#0B1F3A]">
          <p className="text-sm text-slate-500">
            Valor total: <span className="line-through">{PRICE.anchor}</span>
          </p>
          <p className="mt-1 text-sm font-semibold">Hoje, por apenas</p>
          <p className="text-4xl font-extrabold text-[#16A34A]">{PRICE.installments}</p>
          <p className="text-sm text-slate-500">ou {PRICE.fullLabel} à vista</p>
          <p className="mt-2 text-xs text-slate-500">Menos que os juros de poucos dias de rotativo.</p>
          <div className="mt-5">
            <CtaButton id="cta-stack">COMEÇAR MEU PROTOCOLO AGORA →</CtaButton>
          </div>
          <p className="mt-3 text-xs text-slate-400">Acesso imediato por e-mail · Pix, cartão ou boleto</p>
        </div>
      </div>
    </section>
  );
}
