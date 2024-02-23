# Biblioteca

Um teste pré TCC.

## Como rodar

1. Clone o repositório

```bash
git clone https://github.com/devkcud/biblioteca-tcc.git
```

2. Baixe os pacotes

```bash
bun install
```

3. Inicie o banco de dados

```bash
cp .env.example .env
bunx prisma db push
```

4. Inicie o projeto e entre no link `http://localhost:5173`

```bash
bun run dev
```

5. (opcional) Inicie o editor do banco de dados para inserir dados

```bash
bunx prisma studio
```
