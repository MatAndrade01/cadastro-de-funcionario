/*Meu service ler o meu utils e meu repositores, para manipular meu status e faz a regras de negocios!*/
import * as ColaboradorRespostory from "../repositories/colaborador-repositories";
import { noContent, ok } from "../utils/http-helper";

export const getColaboradorService = async () => {
    //chama o banco de dados local
    const data = await ColaboradorRespostory.findAllColaboradores();
    let httpResponse = null;
    if(data){
        //Importa o ok da pasta utils!
        httpResponse = await ok(data);
    }else {
        //Importa o noContent da pasta utils!
        httpResponse = await noContent();
    };
    return httpResponse;
};

export const getColaboradorByIdService = async (id:number) => {
    //chama o banco de dados local
    const data = await ColaboradorRespostory.findColaboradoresById(id);
    let httpResponse = null;

    if(data) {
        //Importa o ok da pasta utils!
        httpResponse = await ok(data);
    }else {
        //Importa o noContent da pasta utils!
        httpResponse = await noContent();
    }
    return httpResponse;
};

export const createColaboradorService = async() =>  {
    
}