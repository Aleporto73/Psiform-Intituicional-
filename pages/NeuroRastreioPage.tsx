
import React from 'react';
import { Activity, ShieldCheck, Brain, Globe, ExternalLink } from 'lucide-react';

const NeuroRastreioPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="bg-slate-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">NeuroRastreio</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Plataforma de Rastreio Neurofuncional Profissional: Baseline e apoio à decisão clínica baseada em dados.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">O que é Rastreio Funcional?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Instrumento que antecede, orienta e complementa avaliações clínicas formais. Apoia-se em paradigmas cognitivos clássicos com rigor conceitual e linguagem acessível ao profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: <Brain className="text-blue-700" size={32} />, 
                title: "Arquitetura Modular", 
                desc: "CORE ativo para condições neurofuncionais: ansiedade, regulação emocional, perfil sensorial e comunicação."
              },
              { 
                icon: <Activity className="text-blue-700" size={32} />, 
                title: "Tarefas Ativas", 
                desc: "Stroop Infantil, Flanker Task, Go/No-Go, Corsi Blocks, N-Back e Reaction Time."
              },
              { 
                icon: <ShieldCheck className="text-blue-700" size={32} />, 
                title: "Padrão Científico", 
                desc: "Equivalência conceitual rigorosa, sem promessas psicométricas indevidas."
              }
            ].map((box, i) => (
              <div key={i} className="p-8 border border-slate-200 rounded-2xl bg-slate-50">
                <div className="mb-4">{box.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{box.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-4">Ética e Segurança</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Não é teste psicológico, não é diagnóstico. Uso profissional responsável; conformidade com LGPD. Tecnologia apoia; decisão humana preservada.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">Não Psicométrico</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">Uso Profissional</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">Conformidade LGPD</span>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <a 
                href="https://neurorastreio.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-700 hover:bg-blue-600 transition-colors text-white font-bold rounded-xl gap-2 shadow-lg"
              >
                Acessar neurorastreio.com.br <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeuroRastreioPage;
