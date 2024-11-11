/*Meu service ler o meu utils e meu repositores, para manipular meu status e faz a regras de negocios!*/
import { response } from "express";
import { ColaboradorModel } from "../models/colaborador-model";
import * as ColaboradorRespostory from "../repositories/colaborador-repositories";
import { badRequest, created, noContent, ok } from "../utils/http-helper";
import { propertiesModel } from "../models/propeties-model";
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
export const createColaboradorService = async(colabrador: ColaboradorModel) =>  {
    let response = null
    //Verifica se está vazio!
    if(Object.keys(colabrador).length !== 0) {
        //Insere o colaborador
        await ColaboradorRespostory.insertColaborador(colabrador);
        response = await created();
    }else{
        //Apresneta um erro
        response = await badRequest();
    }

    return response;
}
//Exporta para meu Controller!
export const deleteColaboradorService = async(id:number) => {
    let response = null;
     //Recebe a resposta do meu repositore
    const isDelete = await ColaboradorRespostory.deleteOneColaborador(id);
    if(isDelete) {
        //Responde meu body com a mensagem "Deleted"!
        response = await ok({menssage: "Deleted"});
    } else {
        response = await badRequest();
    }
    return response;
};
//Exporta para meu Controller!
export const updateColaboradorService = async(id: number, properties: propertiesModel) => {
    let response = null
    //Recebe a resposta do meu repositore
    const data = await ColaboradorRespostory.findAndModifyColaborador(id, properties);
    if(data === undefined) {
        response = await badRequest()
    }else {
        response = await ok(data);
    }
    
    return response;
}