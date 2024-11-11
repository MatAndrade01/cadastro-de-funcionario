/*Meu service ler o meu utils e meu repositores, para manipular meu status e faz a regras de negocios!*/
import { response } from "express";
import { ColoaboradorModel } from "../models/colaborador-model";
import * as ColaboradorRespostory from "../repositories/colaborador-repositories";
import { badRequest, created, noContent, ok } from "../utils/http-helper";
//Exporta para meu Controller!
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
//Exporta para meu Controller!
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
//Exporta para meu Controller!
export const createColaboradorService = async(colabrador: ColoaboradorModel) =>  {
    let response = null
    //Verifica se está vazio!
    if(Object.keys(colabrador).length !== 0) {
        //Insere o colaborador
        await ColaboradorRespostory.insertColaborador(colabrador);
        response = created();
    }else{
        //Apresneta um erro
        response = badRequest();
    }

    return response;
}