import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section className="bg-[#0B1F3A] px-5 pb-14 pt-10 text-white">
      <div className="mx-auto max-w-xl text-center">
        <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-300">
          Protocolo Fôlego
        </p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Pare de pagar o mínimo.{" "}
          <span className="text-[#FF7A1A]">Volte a respirar em 7 dias.</span>
        </h1>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          O passo a passo para sair do rotativo, negociar com o banco usando
          mensagens escritas por Inteligência Artificial e montar seu plano de
          quitação, mesmo ganhando pouco.
        </p>
        <div className="mt-8 sm:mx-auto sm:max-w-sm">
          <CtaButton id="cta-hero">QUERO MEU FÔLEGO DE VOLTA →</CtaButton>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          🔒 Compra segura · Acesso imediato · Garantia de 7 dias
        </p>
        <a href="#problema" className="mt-6 block text-sm text-slate-300 underline">
          Ainda não tenho certeza. Quero entender primeiro.
        </a>
      </div>
    </section>
  );
}
