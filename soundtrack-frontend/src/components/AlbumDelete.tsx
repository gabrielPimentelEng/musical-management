import { useState } from 'react';
import axios from 'axios';

interface Album {
  id: number;
  title: string;
}

interface AlbumDeleteProps {
  album: Album;
  onDelete: () => void; // Callback to refresh or update the album list
}

const AlbumDelete: React.FC<AlbumDeleteProps> = ({ album, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/albums/${album.id}`);
      onDelete(); // Notify parent to refresh the list
    } catch (err) {
      setError('Failed to delete album');
      console.error(err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="p-4 border border-red-300 rounded-md">
      <h2 className="text-lg font-semibold">Delete Album</h2>
      <p className="mt-2">Are you sure you want to delete the album "{album.title}"?</p>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
        <button
          onClick={() => window.history.back()} // Go back to previous page
          className="px-4 py-2 bg-gray-300 text-black rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </div>
      {error && <div className="mt-4 text-red-600">{error}</div>}
    </div>
  );
};

export default AlbumDelete;
