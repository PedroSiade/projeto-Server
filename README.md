Neste projeto, desenvolvi uma aplicação Fullstack utilizando Next.js, MySQL e React.js. O sistema permite a importação de dados por meio de arquivos CSV, com distribuição automatizada entre os operadores cadastrados.

No servidor há um crud dos operadores, e uma função para ler clientes

```bash

npm install

npx prisa generate
#or
npm run generate

npm start
```

Explicação

No projeto, utilizei Prisma e Express para implementar todo o CRUD dos operadores e realizar a leitura dos dados dos clientes.

Para a importação de arquivos CSV, criei uma função que distribui automaticamente os clientes entre os operadores, garantindo uma distribuição justa e equilibrada.
