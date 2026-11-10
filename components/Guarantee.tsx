export default function Guarantee() {
  return (
    <section className="bg-green-50 px-5 py-14">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#16A34A] text-3xl text-white">🛡️</div>
        <h2 className="mt-4 text-2xl font-extrabold text-[#0B1F3A]">Garantia Dupla do Fôlego</h2>
        <div className="mt-6 space-y-4 text-left">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="font-bold text-[#16A34A]">1. Garantia incondicional de 7 dias</p>
            <p className="mt-1 text-sm text-slate-700">
              Não gostou? Peça o reembolso em até 7 dias, sem precisar explicar nada.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="font-bold text-[#16A34A]">2. Garantia do Fôlego: até 30 dias</p>
            <p className="mt-1 text-sm text-slate-700">
              Aplicou o método e não conseguiu montar seu plano de quitação? Envie o
              resumo do seu plano de ação (feito na Fase 1) pelo formulário da área
              de membros e devolvemos 100% do valor. Só pedimos que você{" "}
              <strong>tenha tentado de verdade</strong>.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-600">O risco é todo nosso.</p>
      </div>
    </section>
  );
}
