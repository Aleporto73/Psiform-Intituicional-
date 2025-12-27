
import React from 'react';
import { CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';

const AbaSimplesPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="bg-blue-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">AbaSimples</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Plataforma de Intervenção ABA: Especializada na organização, aplicação e acompanhamento da prática clínica para profissionais de TEA.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Problema Estrutural Resolvido</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                O aumento da demanda por ABA exige escala clínica com responsabilidade técnica. Modelos baseados em cobrança por paciente penalizam clínicas que atendem mais famílias, criam barreiras econômicas invisíveis e comprometem sustentabilidade.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-xl">
                <p className="text-blue-900 font-semibold">Nossa Proposta: Valor fixo previsível, escala viável e padrão técnico internacional.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Explicação Técnica</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "170+ Protocolos Clínicos",
                  "12 Domínios Funcionais",
                  "PEI Automático via Avaliação",
                  "Gestão de Equipe e Acessos",
                  "Relatórios para Família e Escola",
                  "Conformidade Total LGPD"
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <CheckCircle2 size={18} className="text-blue-800 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertTriangle size={20} className="text-amber-600" />
                Limites Éticos
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Não substitui avaliação diagnóstica nem decisão profissional. Organiza a prática — não a automatiza. Tecnologia como apoio; decisão humana preservada.
              </p>
            </div>

            <div className="p-8 bg-blue-900 text-white rounded-2xl">
              <h3 className="font-bold mb-4">Acesse agora</h3>
              <p className="text-sm text-blue-100 mb-6">Visite o portal oficial para conhecer planos e demonstrações.</p>
              <a 
                href="https://abasimples.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 bg-white text-blue-900 rounded-lg font-bold gap-2 hover:bg-blue-50 transition-colors"
              >
                abasimples.com.br <ExternalLink size={16} />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default AbaSimplesPage;
