import { useState } from 'react';
import axios from 'axios';

interface Faixa {
  id: number;
  title: string;
  albumId: number;
}

interface FaixaDeleteProps {
  faixa: Faixa;
  onDelete: () => void; // Callback to refresh or update the faixa list
}

const FaixaDelete: React.FC<FaixaDeleteProps> = ({ faixa, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/albums/${faixa.albumId}/faixas/${faixa.id}`);
      onDelete(); // Notify parent to refresh the list
    } catch (err) {
      setError('Failed to delete faixa');
      console.error(err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="p-4 border border-red-300 rounded-md">
      <h2 className="text-lg font-semibold">Excluir Faixa</h2>
      <p className="mt-2">Tem certeza que deseja excluir a faixa "{faixa.title}"?</p>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Excluir
        </button>
        <button
          onClick={() => window.history.back()} // Go back to previous page
          className="px-4 py-2 bg-gray-300 text-black rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancelar
        </button>
      </div>
      {error && <div className="mt-4 text-red-600">{error}</div>}
    </div>
  );
};

export default FaixaDelete;