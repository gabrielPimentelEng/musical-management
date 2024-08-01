import React, { useState } from 'react';
import axios from 'axios';
import '@/styles/albumAdd.css';

const FaixaAdd: React.FC = () => {
  const [title, setTitle] = useState('');
  const [albumId, setAlbumId] = useState('');
  const [duration, setDuration] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleAdd = async () => {
    setIsAdding(true);
    setError(null);
    setSuccess(null);

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/albums/${albumId}/faixas`;
      await axios.post(url, {
        title,
        duration
      });
      setSuccess('Faixa added successfully');
      setTitle('');
      setAlbumId('');
      setDuration('');
    } catch (err) {
      setError('Failed to add faixa');
      console.error(err);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Adicione uma nova Faixa</h1>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-text mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder='Título'
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Álbum ID</label>
        <input
          type="text"
          value={albumId}
          onChange={(e) => setAlbumId(e.target.value)}
          className="input-text mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Usar ID de um álbum criado, pode consultar no menu de Álbuns em Listar"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Duração</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="input-text mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="MM:SS"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={handleAdd}
          disabled={isAdding}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Confirmar
        </button>
      </div>
      {error && <div className="mt-4 text-red-600">{error}</div>}
      {success && <div className="mt-4 text-green-600">{success}</div>}
    </div>
  );
};

export default FaixaAdd;