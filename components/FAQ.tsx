"use client";
import { useState } from "react";
import CtaButton from "./CtaButton";

const faqs = [
  { q: "Estou sem dinheiro. Como vou pagar R$ 197?", a: "Dá para parcelar em até 12x (cerca de R$ 20 por mês), menos do que poucos dias de juros do rotativo. A primeira fase do protocolo é justamente liberar dinheiro cortando o que está drenando seu orçamento." },
  { q: "Isso é só teoria?", a: "Não. Cada fase termina com uma ação prática: um checklist, uma planilha ou uma mensagem pronta para enviar ao banco. Você aplica no mesmo dia." },
  { q: "Nunca usei ChatGPT. Vou conseguir usar o Negociador IA?", a: "Sim. Você só copia, cola e troca os dados entre colchetes. O guia rápido mostra tudo em 3 passos, e funciona na versão gratuita." },
  { q: "Meu nome está sujo. Funciona para mim?", a: "Funciona. O protocolo mostra como negociar dívidas em atraso e como consultar todas as suas dívidas de graça pelo Registrato, do Banco Central." },
  { q: "Vocês negociam por mim ou pedem acesso à minha conta?", a: "Nunca. Você continua no controle total. Nós entregamos o método e as mensagens prontas, e você envia pelo app do seu banco. Não pedimos senha nem dados bancários." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#F1F5F9] px-5 py-14">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center text-2xl font-extrabold text-[#0B1F3A]">Perguntas frequentes</h2>
        <div className="mt-8 divide-y divide-slate-300">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-4 text-left font-semibold text-[#0B1F3A]"
                aria-expanded={open === i}
              >
                {f.q}
                <span className="ml-3 text-xl text-[#FF7A1A]">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="pb-4 text-sm text-slate-700">{f.a}</p>}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <CtaButton id="cta-faq">QUERO COMEÇAR HOJE →</CtaButton>
        </div>
      </div>
    </section>
  );
}
