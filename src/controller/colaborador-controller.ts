/*Meu controller vai ler meu service */
import { request, Request, Response } from "express";
import { createColaboradorService, deleteColaboradorService, getColaboradorByIdService, getColaboradorService } from "../services/colaborador-service";
import { noContent } from "../utils/http-helper";

//Exporta o getColaborador para usar na minha routes.ts!
export const getColaborador = async (request: Request, response: Response) => {
    //importa o getColaboradorSevice do service, trás o httpRestponse do Service!
    const httpResponse = await getColaboradorService();
    //Tras a resposta do status e do body em JSON!
    response.status(httpResponse.statusCode).json(httpResponse.body);
}
//Exporta o getColaborador para usar na minha routes.ts!
export const getColaboradorById = async (request: Request, response: Response) => {
    //pega o id que foi possado e transforma para numero
    const id = parseInt(request.params.id);
    //importa o getColaboradorByIdSevice do service, trás o httpRestponse do Service!
    const httpResponse = await getColaboradorByIdService(id);
    //Tras a resposta do status e do body em JSON!
    response.status(httpResponse.statusCode).json(httpResponse.body);
}
//Exporta o getColaborador para usar na minha routes.ts!
export const postColaborador = async (request: Request, response: Response) => {
    //Pega o que vem no body da requisição
    const bodyValue = request.body;
    //Manda para o service e aguarada a resposta
    const httpResponse = await createColaboradorService(bodyValue);
    if(httpResponse) {
        //Tras a resposta do status e do body em JSON!
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }else {
        const httpResponse = await noContent();
        //Tras a resposta do status e do body em JSON!
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
};
//Exporta o deleteColaborador para usar na minha routes.ts!
export const deleteColaborador = async(request: Request, response: Response) => {
    //Pega o id e converte para interito!
    const id = parseInt(request.params.id);
    //Manda o id para o service!
    const httpResponse = await deleteColaboradorService(id);
    //Tras a resposta do status e do body em JSON!
    response.status(httpResponse.statusCode).json(httpResponse.body);
}