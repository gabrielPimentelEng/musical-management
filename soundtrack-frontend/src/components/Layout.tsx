import React from 'react';
import '@/styles/albumAdd.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        {/* Sidebar content */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Álbuns Menu</h2>
          <ul>
            <li>
              <a href="/albums" className="text-blue-400 hover:underline">Listar/Excluir</a>
            </li>
            <li>
              <a href="/albums/search" className="text-blue-400 hover:underline">Pesquisa Contendo</a>
            </li>
            <li>
              <a href="/albums/add" className="text-blue-400 hover:underline">Adicionar Álbum</a>
            </li>

          </ul>
          <br />
          <h2 className="text-xl font-semibold">Faixas Menu</h2>
          <ul>
            <li>
              <a href="/faixas" className="text-blue-400 hover:underline">Listar/Excluir</a>
            </li>
            <li>
              <a href="/faixas/search" className="text-blue-400 hover:underline">Pesquisa Contendo</a>
            </li>
            <li>
              <a href="/faixas/add/" className="text-blue-400 hover:underline">Adicionar Faixa</a>
              
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Layout;
