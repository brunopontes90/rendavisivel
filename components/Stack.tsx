import Image from "next/image";
import CtaButton from "./CtaButton";
import { PRICE } from "@/lib/config";

const items = [
  { name: "Protocolo Fôlego (3 fases completas)", desc: "Do diagnóstico à primeira reserva, em PDFs leves para celular." },
  { name: "⭐ Negociador IA", desc: "Prompts prontos por banco e tipo de dívida: rotativo, financiamento, consignado e nome sujo." },
  { name: "Bônus 1: 15 Scripts de Negociação", desc: "O que falar (e o que nunca falar) para o banco." },
  { name: "Bônus 2: Planilha Ordem de Ataque", desc: "Mostra qual dívida pagar primeiro." },
  { name: "Bônus 3: Guia Seus Direitos", desc: "CDC e Lei do Superendividamento explicados de forma simples." },
];

export default function Stack() {
  return (
    <section id="oferta" className="bg-[#0B1F3A] px-5 py-14 text-white">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center text-2xl font-extrabold">Tudo o que você recebe hoje</h2>
        <div className="mx-auto mt-6 max-w-lg">
          <Image src="/img/stack.webp" alt="Protocolo Fôlego, Negociador IA, Guia Seus Direitos, Scripts e Planilha" width={1800} height={1040} />
        </div>
        <ul className="mt-8 space-y-3">
          {items.map((i) => (
            <li key={i.name} className="rounded-xl bg-white/5 p-4">
              <p className="font-semibold">✅ {i.name}</p>
              <p className="mt-1 text-sm text-slate-300">{i.desc}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-2xl bg-white p-6 text-center text-[#0B1F3A]">
          <p className="text-sm font-semibold">Tudo isso por</p>
          <p className="text-4xl font-extrabold text-[#16A34A]">{PRICE.installments}</p>
          <p className="text-sm text-slate-500">ou {PRICE.fullLabel} à vista</p>
          <p className="mt-2 text-xs text-slate-500">Pagamento único. Sem mensalidade.</p>
          <div className="mt-5">
            <CtaButton id="cta-stack">COMEÇAR MEU PROTOCOLO AGORA →</CtaButton>
          </div>
          <p className="mt-3 text-xs text-slate-400">Acesso imediato por e-mail · Pix ou cartão em até 12x</p>
        </div>
      </div>
    </section>
  );
}
