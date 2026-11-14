import CtaButton from "./CtaButton";

const antes = [
  "Pagar só o mínimo e ver o saldo crescer",
  "Evitar abrir o app do banco",
  "Ligação de cobrança sem saber o que responder",
  "Nenhum plano, só a esperança de que o mês que vem melhore",
];

const depois = [
  "Saber quanto deve, para quem e qual dívida vem primeiro",
  "Mensagem pronta para negociar com cada banco",
  "Um plano de quitação escrito, mês a mês",
  "Os primeiros reais da reserva de emergência guardados",
];

export default function Transformacao() {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-[#FF7A1A]">
          Imagine daqui a algumas semanas
        </p>
        <h2 className="mt-2 text-center text-2xl font-extrabold text-[#0B1F3A]">
          Do sufoco para um plano no papel
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-700">
          Imagine abrir o app do banco e ver uma parcela que cabe no seu mês.
          Responder a cobrança com uma proposta por escrito. E saber exatamente
          qual é a próxima dívida a resolver.
        </p>

        {/* Before / after comparison: stacked on mobile, side by side on desktop */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
            <p className="font-bold text-red-700">Antes</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              {antes.map((t) => (
                <li key={t}>✗ {t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
            <p className="font-bold text-[#16A34A]">Com o Protocolo Fôlego</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              {depois.map((t) => (
                <li key={t}>✓ {t}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Os resultados dependem da sua situação e de quanto você aplica o método.
        </p>

        <div className="mx-auto mt-8 max-w-sm">
          <CtaButton id="cta-transformacao">QUERO MONTAR MEU PLANO →</CtaButton>
        </div>
      </div>
    </section>
  );
}
