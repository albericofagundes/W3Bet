const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "db_w3bets",
  password: "99411520",
  port: 5433,
  connectionTimeoutMillis: 9000, // Aumente esse valor conforme necessário
});

// Função para realizar a conexão e enviar mensagem de sucesso ou erro
async function conectarAoBancoDeDados() {
  try {
    const client = await pool.connect();
    console.log("Conexão bem-sucedida com o banco de dados!");
    client.release(); // Liberar o cliente de volta para o pool
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}

// Chamar a função para conectar ao banco de dados
conectarAoBancoDeDados();
