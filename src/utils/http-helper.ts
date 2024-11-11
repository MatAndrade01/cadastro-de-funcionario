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
        //retonar o statusCode com a numeração que decidir e o body com nulo!
        statusCode: 204,
        body: null,
    };
};
//Exportando o badRequest sem receber nada!
export const badRequest = async(): Promise<HttpResponse> => {
    return {
        //retonar o statusCode com a numeração que decidir e o body com nulo!
        statusCode: 400,
        body: null,
    }
}
//Exportando o created sem receber nada!
export const created = async(): Promise<HttpResponse> => {
    return {
        //retonar o statusCode com a numeração que decidir e o body com message!
        statusCode: 201,
        body: {
            message: "Successful",
        },
    }
}