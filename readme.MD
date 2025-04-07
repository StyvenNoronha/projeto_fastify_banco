# Projeto Fastify Banco

Este projeto é uma aplicação desenvolvida com [Fastify](https://www.fastify.io/) e [TypeScript](https://www.typescriptlang.org/), utilizando [Knex.js](http://knexjs.org/) para interagir com o banco de dados.

## Estrutura do Projeto

- `src/`: Contém o código-fonte principal da aplicação.
- `test/`: Inclui os testes automatizados para a aplicação.
- `.env.example`: Exemplo de arquivo de configuração de variáveis de ambiente.
- `knexfile.ts`: Configurações do Knex.js para diferentes ambientes.
- `package.json`: Gerencia as dependências e scripts do projeto.
- `tsconfig.json`: Configurações do compilador TypeScript.

## Configuração

1. **Instalação das Dependências**:

   ```bash
   npm install
   ```

2. **Configuração do Ambiente**:

   Copie o arquivo `.env.example` para `.env` e ajuste as variáveis conforme necessário.

3. **Execução de Migrações**:

   Para criar as tabelas no banco de dados, execute:

   ```bash
   npx knex migrate:latest
   ```

## Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Testes

Para executar os testes automatizados:

```bash
npm test
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.