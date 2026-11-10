const fases = [
  ["1. Estancar", "Pare a sangria: saia do rotativo e corte o que está drenando seu dinheiro."],
  ["2. Negociar", "Use o Negociador IA: a Inteligência Artificial escreve a mensagem pronta para o seu banco."],
  ["3. Reconstruir", "Monte o Sistema 4 Contas e junte seus primeiros R$ 500 de reserva."],
];

export default function Problema() {
  return (
    <section id="problema" className="scroll-mt-4 bg-white px-5 py-14 text-slate-800">
      <div className="mx-auto max-w-xl">
        <h2 className="text-2xl font-extrabold text-[#0B1F3A]">
          O &ldquo;pagamento mínimo&rdquo; é a armadilha mais cara do Brasil.
        </h2>
        <p className="mt-4">
          Os juros do rotativo do cartão estão entre os mais altos do mundo.
          Quando a fatura não é paga inteira, a dívida pode chegar ao{" "}
          <strong>dobro do valor original</strong>, o máximo que a lei permite.
        </p>
        <div className="mt-6 rounded-xl bg-[#F1F5F9] p-5">
          <p className="text-sm text-slate-500">Na prática:</p>
          <p className="mt-1 text-lg font-bold text-[#0B1F3A]">
            Uma fatura de R$ 2.000 pode virar até R$ 4.000.
          </p>
          <p className="mt-2 text-sm">
            E todo mês você paga, paga… e o saldo quase não sai do lugar.
          </p>
        </div>
        <ul className="mt-6 space-y-2">
          <li>😮‍💨 Ansiedade ao abrir o app do banco</li>
          <li>📵 Ligações de cobrança que você evita atender</li>
          <li>🔁 A sensação de trabalhar só para pagar juros</li>
        </ul>
        <p className="mt-6 font-semibold">
          O problema não é falta de força de vontade. É falta de um{" "}
          <span className="text-[#FF7A1A]">método</span>.
        </p>

        <h2 className="mt-12 text-2xl font-extrabold text-[#0B1F3A]">Conheça o Protocolo Fôlego</h2>
        <p className="mt-3">Três fases simples, feitas para o celular:</p>
        <ol className="mt-4 space-y-3">
          {fases.map(([t, d]) => (
            <li key={t} className="rounded-xl border border-slate-200 p-4">
              <p className="font-bold text-[#0B1F3A]">{t}</p>
              <p className="text-sm">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
