export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] px-5 py-8 text-center text-xs text-slate-400">
      <p>© {new Date().getFullYear()} Protocolo Fôlego. Todos os direitos reservados.</p>
      <p className="mt-2">
        Conteúdo educativo. Não substitui orientação jurídica ou financeira individual.
        Resultados dependem da aplicação de cada pessoa.
      </p>
      <p className="mt-2">
        Este site não faz parte do Facebook ou do Google e não é endossado por eles.
      </p>
    </footer>
  );
}
