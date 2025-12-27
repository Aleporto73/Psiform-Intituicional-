
import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Cpu, FileText, ArrowRight, ChevronDown } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* 1. Hero Section */}
      <section className="bg-white pt-24 pb-20 px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            PSIFORM — MARCA INSTITUCIONAL
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">
            Psiform — Ecossistema Profissional para Psicologia, Psicopedagogia e Educação
          </h1>
          <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Soluções organizadas por profundidade de uso, responsabilidade técnica e delimitação institucional clara.
          </p>
          <div className="flex justify-center mt-10">
            <a 
              href="#ecossistema" 
              className="text-slate-400 hover:text-slate-600 text-sm font-medium flex items-center gap-1 transition-colors group"
            >
              Ver arquitetura do ecossistema 
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. O Papel Institucional com Mini-Cards de Delimitação */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">O papel institucional da Psiform</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-10">
              A Psiform atua como instância institucional de organização, curadoria, validação e direcionamento de um ecossistema de soluções independentes para profissionais da psicologia, psicopedagogia e educação.
            </p>
          </div>

          {/* Grid de Delimitação (2x2 Desktop, 1x4 Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border border-slate-200 rounded-xl transition-all hover:border-slate-300">
              <h3 className="text-base font-bold text-slate-900 mb-2 uppercase tracking-wide">ÂMBITO DE ATUAÇÃO</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A Psiform define diretrizes institucionais que orientam, sem interferir, a execução clínica, educacional ou operacional.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200 rounded-xl transition-all hover:border-slate-300">
              <h3 className="text-base font-bold text-slate-900 mb-2 uppercase tracking-wide">ARQUITETURA DO ECOSSISTEMA</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                As plataformas do ecossistema atuam de forma independente, com escopo definido e responsabilidades próprias.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200 rounded-xl transition-all hover:border-slate-300">
              <h3 className="text-base font-bold text-slate-900 mb-2 uppercase tracking-wide">DECISÃO PROFISSIONAL</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A responsabilidade técnica e a tomada de decisão permanecem integralmente com o profissional habilitado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ecossistema Section */}
      <section id="ecossistema" className="py-24 px-4 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">O Ecossistema Psiform</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Organizado em camadas funcionais complementares, preservando a soberania da decisão profissional.
            </p>
          </div>

          <div className="space-y-24">
            {/* Camada 1 */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-900 text-white p-2 rounded-lg">
                  <Layers size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Camada 1 — Plataformas CORE</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* AbaSimples */}
                <div className="group bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">AbaSimples</h4>
                    <p className="text-sm text-blue-800 font-semibold mb-4">Intervenção ABA</p>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                      Plataforma especializada na organização, aplicação e acompanhamento da prática ABA. Estrutura clínica com PEI automatizado e biblioteca de protocolos.
                    </p>
                  </div>
                  <Link to="/abasimples" className="inline-flex items-center text-blue-900 font-bold gap-2 group-hover:underline">
                    Ver visão institucional →
                  </Link>
                </div>

                {/* NeuroRastreio */}
                <div className="group bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">NeuroRastreio</h4>
                    <p className="text-sm text-blue-800 font-semibold mb-4">Rastreio Neurofuncional</p>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                      Plataforma de rastreio neurofuncional voltada ao uso profissional, estruturada a partir de paradigmas cognitivos clássicos.
                    </p>
                  </div>
                  <Link to="/neurorastreio" className="inline-flex items-center text-blue-900 font-bold gap-2 group-hover:underline">
                    Ver visão institucional →
                  </Link>
                </div>

                {/* Psiway */}
                <div className="group bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xl font-bold text-slate-900">Psiway</h4>
                      <Cpu size={16} className="text-slate-400" />
                    </div>
                    <p className="text-sm text-blue-800 font-semibold mb-4">Clínica Psicológica (TCC)</p>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                      Plataforma clínica para Terapia Cognitivo-Comportamental, com prontuário estruturado, organização do raciocínio clínico e acompanhamento terapêutico.
                    </p>
                  </div>
                </div>

                {/* PsicoPEI */}
                <div className="group bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xl font-bold text-slate-900">PsicoPEI</h4>
                      <Cpu size={16} className="text-slate-400" />
                    </div>
                    <p className="text-sm text-blue-800 font-semibold mb-4">Clínica Psicopedagógica</p>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                      Plataforma psicopedagógica para organização do atendimento, com PEI/PDI estruturados, acompanhamento longitudinal e relatórios técnicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Camada 2 */}
            <div className="pt-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-slate-700 text-white p-2 rounded-lg">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-[#2F2F2F]">Camada 2 — Ferramentas Essenciais</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Psiform Formulários</h4>
                    <p className="text-slate-600 mb-4 text-sm">Hub institucional de formulários profissionais revisados, com recursos de assinatura eletrônica.</p>
                  </div>
                  <button className="w-full mt-4 py-3 bg-[#1F2933] text-white rounded-lg font-bold text-sm hover:bg-[#2c3742] transition-colors">
                    Acessar a ferramenta
                  </button>
                </div>
                <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">PsicopedagoHUB</h4>
                    <p className="text-slate-600 mb-4 text-sm">Ferramentas práticas e recursos de apoio educacional alinhados à BNCC.</p>
                  </div>
                  <button className="w-full mt-4 py-3 bg-[#1F2933] text-white rounded-lg font-bold text-sm hover:bg-[#2c3742] transition-colors">
                    Acessar a ferramenta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Visual Textual */}
      <section className="pt-20 pb-40 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto bg-[#2B2F36] rounded-3xl p-10 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Layers size={200} />
          </div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-[#E6E8EB]">
            Arquitetura Institucional do Ecossistema
          </h2>
          <pre className="font-mono text-sm leading-relaxed text-[#C9CDD3] overflow-x-auto">
{`PSIFORM
(marca institucional · governança · curadoria)

├─ Plataformas CORE
│  ├─ AbaSimples — Intervenção ABA
│  ├─ NeuroRastreio — Rastreio Neurofuncional
│  ├─ Psiway — Clínica Psicológica (TCC)
│  └─ PsicoPEI — Clínica Psicopedagógica
│
└─ Ferramentas Essenciais
   ├─ Psiform Formulários
   └─ PsicopedagoHUB`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
