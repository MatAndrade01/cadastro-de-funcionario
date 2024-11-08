/*Meu server.js vai ler meu app.ts*/ 
import creatApp from "./app";
//Trazendo um arquivo exportado!
const app = creatApp();
//Indicando uma portar para o servidor!
const port = process.env.PORT;
//Rodando o server e escutnado a portar!
app.listen(port, () => {
    console.log(`🔥 Server running at port http://localhost:${port}`);
});