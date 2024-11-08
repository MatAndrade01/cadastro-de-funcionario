/*Meu controller vai ler meu service */
import { request, Request, Response } from "express";
import { getColaboradorByIdService, getColaboradorService } from "../services/colaborador-service";

//Exporta o getColaborador para usar na minha routes.ts!
export const getColaborador = async (request: Request, response: Response) => {
    //importa o getColaboradorSevice do service, trás o httpRestponse do Service!
    const httpResponse = await getColaboradorService();
    //Tras a resposta do status e do body em JSON!
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getColaboradorById = async (request: Request, response: Response) => {
    //pega o id que foi possado e transforma para numero
    const id = parseInt(request.params.id);
    //importa o getColaboradorByIdSevice do service, trás o httpRestponse do Service!
    const httpResponse = await getColaboradorByIdService(id);
    //Tras a resposta do status e do body em JSON!
    response.status(httpResponse.statusCode).json(httpResponse.body);
}


export const postColaborador = async (request: Request, response: Response) => {
    const bodyValue = request.body
    console.log(bodyValue)
}