
import React from 'react';
import { BookOpen, Scale, Landmark } from 'lucide-react';

const WhitePaperPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <article className="max-w-4xl mx-auto prose prose-slate">
        <header className="mb-16 border-b border-slate-200 pb-12 text-center">
          <Landmark size={48} className="text-blue-900 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4 serif">White Paper da Psiform</h1>
          <p className="text-lg text-slate-500 italic">Governança, Ética e Arquitetura de um Ecossistema Profissional</p>
          <div className="mt-8 flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <span>Versão Canônica</span>
            <span>•</span>
            <span>Fonte Única Oficial</span>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-blue-800">1.</span> Introdução
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            O problema estrutural que este documento resolve: A adoção de tecnologia nas áreas de psicologia, psicopedagogia e educação avançou mais rápido do que a clareza institucional sobre papéis, limites e responsabilidades.
          </p>
          <p className="text-slate-700 leading-relaxed">
            A Psiform nasce para resolver esse problema não criando mais um produto, mas criando estrutura, hierarquia e governança.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-blue-800">2.</span> Definição Institucional
          </h2>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">2.1 O que é a Psiform</h4>
            <p className="text-slate-600 text-sm mb-4">
              Marca guarda-chuva institucional que atua como instância de organização, curadoria, validação e direcionamento de um ecossistema de soluções profissionais.
            </p>
            <h4 className="font-bold text-slate-900 mb-2">2.2 Princípio central</h4>
            <p className="text-slate-600 text-sm">Tecnologia como apoio. A decisão humana é soberana.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-blue-800">3.</span> Arquitetura do Ecossistema
          </h2>
          <p className="text-slate-700 mb-6">Organizado em camadas funcionais, não em produtos soltos:</p>
          <ul className="space-y-4 text-slate-700">
            <li><strong>Camada 1 — Plataformas CORE:</strong> Uso contínuo, profundidade técnica, dados sensíveis.</li>
            <li><strong>Camada 2 — Ferramentas Essenciais:</strong> Entrada rápida, valor imediato, pagamento único.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-blue-800">4.</span> Ética, Conformidade e Limites
          </h2>
          <div className="border-l-4 border-slate-900 pl-6 space-y-4">
            <p className="text-slate-800 font-medium">
              Todo o ecossistema segue princípios fixos: Não diagnóstico automático, responsabilidade técnica humana, conformidade com LGPD e Resoluções Profissionais.
            </p>
            <p className="text-slate-600 italic">
              "Onde termina a tecnologia, começa a responsabilidade humana."
            </p>
          </div>
        </section>

        <section className="mb-12 bg-slate-900 text-slate-300 p-10 rounded-3xl">
          <h2 className="text-xl font-bold text-white mb-6">Uso Deste Documento</h2>
          <p className="text-sm leading-relaxed opacity-80">
            Este White Paper é fonte oficial do site, base jurídica e ética, guia institucional e referência estratégica. Não é material comercial, pitch de venda, manual de uso, roadmap ou promessa de resultado. Ele explica e delimita.
          </p>
        </section>

        <footer className="mt-20 text-center text-slate-400 text-xs">
          <p>Psiform Institutional Documents © {new Date().getFullYear()}</p>
        </footer>
      </article>
    </div>
  );
};

export default WhitePaperPage;
