
import React from 'react';
import { ShieldCheck, UserCheck, ZapOff, BookOpen } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>Artigos</span>
          <span>•</span>
          <span>Tecnologia & Ética</span>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight serif">
            IA na Avaliação Psicológica: Entre a Eficiência Técnica e o Rigor Ético
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            Como o ecossistema Psiform equilibra a inovação computacional com os limites intransponíveis da clínica humana.
          </p>
          <div className="mt-8 pt-8 border-t border-slate-200 flex items-center gap-4 text-sm text-slate-500">
            <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold">P</div>
            <div>
              <p className="font-bold text-slate-900">Conselho Técnico Psiform</p>
              <p>Publicado em Outubro de 2023</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed serif text-lg space-y-8">
          <p>
            A introdução de sistemas de processamento de dados e inteligência artificial nas ciências da saúde mental não é mais uma promessa futura, mas uma realidade operacional. No entanto, para o profissional de psicologia e psicopedagogia, a tecnologia não pode ser uma "caixa preta". Ela deve ser uma extensão organizada do raciocínio clínico, operando sob camadas rígidas de governança.
          </p>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 not-italic my-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 sans-serif">
              <ShieldCheck className="text-blue-800" /> 1. Arquitetura de Dados e Privacidade (LGPD)
            </h2>
            <p className="text-base text-slate-600 mb-4">
              A arquitetura técnica da Psiform é desenhada para garantir que o dado sensível nunca seja "alimento" para algoritmos de treinamento sem controle. 
            </p>
            <ul className="text-sm space-y-2 list-disc pl-5 text-slate-600">
              <li><strong>Criptografia em Repouso:</strong> Dados clínicos são protegidos por chaves de alto nível.</li>
              <li><strong>Rastreabilidade Total:</strong> Cada acesso a um prontuário ou relatório gera um log auditável, em conformidade com a Lei nº 13.709/18.</li>
              <li><strong>Minimização:</strong> Coletamos apenas o estritamente necessário para o suporte à decisão, evitando a retenção indevida de metadados.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 serif">2. O Papel do "Human-in-the-Loop"</h2>
          <p>
            O conceito de <em>Human-in-the-Loop</em> (humano no ciclo de decisão) é o pilar central da nossa governança. Na Psiform, a IA ou os sistemas automatizados não "concluem" nada. Eles organizam indicadores. 
          </p>
          <p>
            A supervisão humana não é apenas um passo de revisão; é a instância que confere validade ética ao dado. Enquanto uma ferramenta como o NeuroRastreio pode identificar um tempo de reação atípico (paradigmas como Stroop ou N-Back), cabe exclusivamente ao profissional interpretar se esse dado reflete uma condição neurofuncional ou um fator contextual externo (ansiedade momentânea, fadiga, ou ambiente).
          </p>

          <blockquote className="border-l-4 border-blue-900 pl-6 my-10 text-2xl text-slate-900 font-medium">
            "A tecnologia é capaz de processar padrões em milissegundos, mas a clínica exige a compreensão do contexto em décadas."
          </blockquote>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 serif">3. Limitações do Diagnóstico Automatizado</h2>
          <p>
            É fundamental que os profissionais compreendam as limitações intrínsecas da tecnologia. O diagnóstico psicológico é um processo multivariado que envolve empatia, transferência, leitura de microexpressões e história de vida — elementos que a IA não pode mimetizar com validade clínica.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-italic">
            <div className="p-6 bg-slate-100 rounded-xl">
              <ZapOff className="text-red-700 mb-3" size={24} />
              <h4 className="font-bold text-slate-900 mb-2 sans-serif">O que a IA não faz:</h4>
              <p className="text-sm text-slate-600">Não compreende nuances culturais, não possui intuição clínica e não assume responsabilidade jurídica sobre o diagnóstico.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <UserCheck className="text-blue-700 mb-3" size={24} />
              <h4 className="font-bold text-slate-900 mb-2 sans-serif">O que o profissional garante:</h4>
              <p className="text-sm text-slate-600">O acolhimento, o raciocínio diferencial e a soberania sobre o plano terapêutico.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 serif">Conclusão: Tecnologia como Apoio, não Substituto</h2>
          <p>
            Na Psiform, acreditamos que a tecnologia deve servir para reduzir a carga operacional e organizar a complexidade dos dados. Ao remover o ruído da burocracia e da organização manual de protocolos, liberamos o profissional para o que é essencial: a relação terapêutica e o julgamento técnico especializado.
          </p>
          <p>
            Nossas plataformas CORE — como o AbaSimples e o NeuroRastreio — são o reflexo desse compromisso. Elas não são "inteligentes" por si sós; elas se tornam inteligentes nas mãos de um profissional capacitado e ético.
          </p>
        </div>

        {/* Article Footer / CTA */}
        <footer className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <BookOpen className="text-blue-400" size={40} />
              <div>
                <h4 className="font-bold text-lg tracking-tight">Deseja aprofundar-se?</h4>
                <p className="text-slate-400 text-sm">Leia nosso White Paper para entender a base jurídica do ecossistema.</p>
              </div>
            </div>
            <a href="#/whitepaper" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
              Ver White Paper
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPage;
