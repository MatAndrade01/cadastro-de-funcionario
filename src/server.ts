/*Meu server.js vai ler meu app.ts*/ 
import creatApp from "./app";
import { cliente } from "./data/colaboradores-data";
//Trazendo um arquivo exportado!
const app = creatApp();
//Indicando uma portar para o servidor!
const port = process.env.PORT;

//Conectando ao banco de dados
(async () => {
    try {
        await cliente.connect();
        console.log('Conectado ao banco de dados PostgreSQL');

    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1); 
    }
})();
//Rodando o server e escutnado a portar!
app.listen(port, () => {
    console.log(`🔥 Server running at port http://localhost:${port}`);
});