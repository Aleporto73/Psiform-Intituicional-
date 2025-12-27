
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2328] text-[#C9CDD3] py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-[#E6E8EB] font-bold text-lg mb-4 tracking-tighter uppercase text-xs tracking-widest">PSIFORM</h3>
          <p className="text-sm leading-relaxed max-w-md">
            Marca guarda-chuva institucional de organização e curadoria de soluções para psicologia, psicopedagogia e educação.
          </p>
        </div>
        <div className="text-sm md:text-right space-y-2">
          <p>Conformidade com LGPD</p>
          <p>Resolução CFP nº 06/2019</p>
          <p>Lei nº 14.063/20</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Tecnologia apoia. Decisão e responsabilidade humana preservadas.</p>
        <p>&copy; {new Date().getFullYear()} Psiform Institutional. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
