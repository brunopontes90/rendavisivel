import Image from "next/image";

export default function PorDentro() {
  return (
    <section className="bg-[#F1F5F9] px-5 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#FF7A1A]">Veja por dentro</p>
        <h2 className="mt-2 text-2xl font-extrabold text-[#0B1F3A]">Feito para ler e aplicar no celular</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-700">
          Páginas curtas, passo a passo numerado e prompts prontos para copiar.
          Nada de apostila de 200 páginas.
        </p>
        <div className="mx-auto mt-8 max-w-2xl">
          <Image src="/img/inside.webp" alt="Páginas do Negociador IA e do Guia Seus Direitos" width={1960} height={1280} />
        </div>
      </div>
    </section>
  );
}
