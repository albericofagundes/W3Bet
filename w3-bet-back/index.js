import pkg from "pg";

const { Pool } = pkg;

const dbConfig = {
  user: "postgres",
  host: "localhost",
  database: "db_w3bets",
  password: "99411520",
  port: 5433,
};

const pool = new Pool(dbConfig);

// Função para verificar a conexão com o banco de dados
async function checkDatabaseConnection() {
  const client = await pool.connect();
  try {
    console.log("Conexão bem-sucedida ao banco de dados");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  } finally {
    client.release();
  }
}

// Chamada da função para verificar a conexão
checkDatabaseConnection()
  .then(() => {
    console.log("Conexão bem-sucedida. Pronto para realizar consultas.");
  })
  .catch((error) => {
    console.error("Erro ao verificar a conexão com o banco de dados:", error);
  });

// app.use(cors());

// const corsOptions = {
//   origin: "http://localhost:4200",
// };

// app.use(cors(corsOptions));
