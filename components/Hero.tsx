import Image from "next/image";
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#0B1F3A] px-5 pb-14 pt-10 text-white">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-300">
            Protocolo Fôlego
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Pare de pagar o mínimo.{" "}
            <span className="text-[#FF7A1A]">Monte seu plano de saída em 7 dias.</span>
          </h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            O passo a passo para sair do rotativo, negociar com o banco usando
            mensagens escritas por Inteligência Artificial e montar seu plano de
            quitação, mesmo ganhando pouco.
          </p>

          {/* Product mockup: shown between copy and CTA on mobile, beside copy on desktop */}
          <div className="mx-auto mt-8 max-w-md md:hidden">
            <Image src="/img/hero.webp" alt="Protocolo Fôlego e o Negociador IA no celular" width={1520} height={1320} priority />
          </div>

          <div className="mt-8 sm:mx-auto sm:max-w-sm md:mx-0">
            <CtaButton id="cta-hero">QUERO MEU FÔLEGO DE VOLTA →</CtaButton>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            🔒 Compra segura · Acesso imediato · Garantia de 7 dias
          </p>
          <a href="#problema" className="mt-6 block text-sm text-slate-300 underline">
            Ainda não tenho certeza. Quero entender primeiro.
          </a>
        </div>
        <div className="hidden md:block">
          <Image src="/img/hero.webp" alt="Protocolo Fôlego e o Negociador IA no celular" width={1520} height={1320} priority />
        </div>
      </div>
    </section>
  );
}
