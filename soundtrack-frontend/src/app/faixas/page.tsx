'use client';

import React, { useState } from 'react';
import axios from 'axios';
import FaixaList from '../../components/FaixaList';
import FaixaDelete from '../../components/FaixaDelete';
import Layout from '../../components/Layout';

interface Faixa {
  id: number;
  title: string;
  albumId: number;
  duration: number;
}

const FaixasPage: React.FC = () => {
  const [albumId, setAlbumId] = useState<string>('');
  const [faixas, setFaixas] = useState<Faixa[]>([]);
  const [selectedFaixa, setSelectedFaixa] = useState<Faixa | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchFaixas = async (id: string) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/albums/${id}/faixas`);
      setFaixas(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch faixas');
      setFaixas([]);
    }
  };

  const handleSearch = () => {
    if (albumId) {
      fetchFaixas(albumId);
    }
  };

  const handleDelete = () => {
    if (albumId) {
      fetchFaixas(albumId); 
    }
    setSelectedFaixa(null); 
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Faixas</h1>
      <div className="mb-4">
        <label htmlFor="albumId" className="block text-sm font-medium text-gray-700">
          Album ID
        </label>
        <input
          type="text"
          id="albumId"
          value={albumId}
          onChange={(e) => setAlbumId(e.target.value)}
          className="input-text mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          onClick={handleSearch}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Confirmar
        </button>
      </div>
      {error && <div className="mt-4 text-red-600">{error}</div>}
      <FaixaList faixas={faixas} onSelect={setSelectedFaixa} />
      {selectedFaixa && <FaixaDelete faixa={selectedFaixa} onDelete={handleDelete} />}
    </Layout>
  );
};

export default FaixasPage;