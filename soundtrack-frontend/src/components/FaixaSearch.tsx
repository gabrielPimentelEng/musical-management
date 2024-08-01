import React, { useState } from 'react';
import axios from 'axios';
import '@/styles/albumAdd.css';

interface Faixa {
  id: number;
  title: string;
  albumId: number;
  duration: number;
}

interface FaixaSearchProps {
  onSelect: (faixa: Faixa) => void;
}

const FaixaSearch: React.FC<FaixaSearchProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [faixas, setFaixas] = useState<Faixa[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/faixas/search`, {
        params: { query: searchTerm },
      });
      setFaixas(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to search faixas');
      setFaixas([]);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Escolha uma sequência de palavras que contenha no(s) título(s) desejado(s)</h1>
      <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700">
        Pesquisa por título
      </label>
      <input
        type="text"
        id="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input-text mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Título"
      />
      <button
        onClick={handleSearch}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Confirmar
      </button>
      {error && <div className="mt-4 text-red-600">{error}</div>}
      <ul>
        {faixas.map((faixa) => (
          <li key={faixa.id} className="mb-2 p-2 border border-gray-200 rounded-md">
            <h3 className="text-lg font-semibold">{faixa.title}</h3>
            <p className="text-sm text-gray-600">Duration: {faixa.duration} seconds</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaixaSearch;