import { HttpResponse } from "../models/http-response-model";

//Exportando o ok, que receber data!
export const ok = async (data:any): Promise<HttpResponse> => {
    //retonar o statusCode com a numeração que decidir e o body com data!
    return {
        statusCode: 200,
        body: data,
    };
};
//Exportando o noContent sem receber nada!
export const noContent = async(): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null,
    };
};