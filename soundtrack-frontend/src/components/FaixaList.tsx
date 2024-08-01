import React from 'react';
import '@/styles/albumAdd.css';

interface Faixa {
  id: number;
  title: string;
  albumId: number;
  duration: number;
}

interface FaixaListProps {
  faixas: Faixa[];
  onSelect: (faixa: Faixa) => void;
}

const FaixaList: React.FC<FaixaListProps> = ({ faixas, onSelect }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Faixas</h2>
      <ul>
        {faixas.map((faixa) => (
          <li key={faixa.id} className="mb-2 p-2 border border-gray-200 rounded-md">
            <h3 className="text-lg font-semibold">{faixa.title}</h3>
            <p className="text-sm text-gray-600">Duration: {faixa.duration} seconds</p>
            <button
              onClick={() => onSelect(faixa)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaixaList;