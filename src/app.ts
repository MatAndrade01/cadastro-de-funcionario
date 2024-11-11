/*Meu app.ts vai ler meu routers.ts*/
import express, { Request, Response} from "express";
import router from "./routes";
import cors from "cors";
//Função para criar o app
function creatApp() {
    //Quardando a aplicação express dentro do app!
    const app = express();
    //Utilianado somente JSON!
    app.use(express.json());
    //Falando para minha aplicação usar as rotas importadas do arquivo: router, usando /api como padrão!
    app.use("/api", router);

    const corsOptions = {
        origin:'https://192.168.1.56/'
    }

    app.use(cors(corsOptions));
    //Retorna o app
    return app;
}

export default creatApp;