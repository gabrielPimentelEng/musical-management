# musical-management

Este projeto é uma aplicação web para gerenciar uma discografia. Os usuários podem visualizar, pesquisar, adicionar e excluir álbuns e faixas. O frontend é construído com Next.js, React e TypeScript, e se comunica com um backend PHP Laravel via APIs RESTful.

## Índice

- [Recursos](#recursos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Licença](#licença)

## Recursos

- Visualizar lista de álbuns e faixas
- Pesquisar álbuns e faixas por nome
- Adicionar um novo álbum
- Adicionar uma nova faixa a um álbum
- Excluir uma faixa
- Excluir um álbum

## Instalação

### Pré-requisitos

- Node.js (v14.x ou superior)
- npm ou yarn
- PHP (v7.4 ou superior)
- Composer
- Laravel (v8.x ou superior)
- PostgreSQL

### Configuração do Backend

1. Clone o repositório:

   ```bash
   git clone https://github.com/gabrielPimentelEng/musical-management.git
   cd musical-management/soundtrack-api
   
2. Instale as dependências:

   ```bash
   composer install
   
3. Crie uma cópia do arquivo .env e atualize as variáveis de ambiente:

   ```bash
   cp .env.example .env
   php artisan key:generate
   
4. Configure o banco de dados:

   ```bash
   php artisan migrate
   php artisan db:seed

5. Inicie o servidor de desenvolvimento do Laravel:

   ```bash
   php artisan serve

### Configuração do FrontEnd

1. Navegue até o diretório frontend:

   ```bash
   cd musical-management/soundtrack-frontend
   
2. Instale as dependências:

   ```bash
   npm install
   
3. Crie uma cópia do arquivo .env.local e atualize as variáveis de ambiente:

   ```bash
   cp .env.local.example .env.local
   
4. Inicie o servidor de desenvolvimento do Next.js:

   ```bash
   npm run dev

### Uso

1. Abra o navegador e navegue até http://localhost:3000 para o frontend.
2. A API do backend está acessível em http://localhost:8000/api.

## Endpoints da API

### Álbuns

- GET /api/albums: Lista todos os álbuns
- POST /api/albums: Cria um novo álbum
- GET api/albums/search: Obtém lista de álbuns baseado em critério de pesquisa, a entrada do dado precisa conter em algum lugar no título do álbum.
- DELETE /api/albums/{album}: Exclui um álbum específico

### Faixas

- GET /api/albums/{album}/faixas: Lista todas as faixas de um álbum específico
- POST /api/albums/{album}/faixas: Cria uma nova faixa em um álbum específico
- GET api/faixas/search: Obtém lista de faixas baseado em critério de pesquisa, a entrada do dado precisa conter em algum lugar no título da faixa.
- GET /api/albums/{album}/faixas/{faixa}: Obtém detalhes de uma faixa específica
- DELETE /api/albums/{album}/faixas/{faixa}: Exclui uma faixa específica

### Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
