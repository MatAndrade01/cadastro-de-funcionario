import { ColoaboradorModel } from "../models/colaborador-model";

const dataBase: ColoaboradorModel[] = [
    {
        id: 1,
        name: "Matheus",
        functionCollaborator: "Assistente de TI",
        day: 14,
        month: 10
    },
    {
        id: 2,
        name: "Matias",
        functionCollaborator: "Analisata de TI",
        day: 16,
        month: 6
    },
];
//Busca todos os colaboradores no data base!
export const findAllColaboradores = async (): Promise<ColoaboradorModel[]> => {
    return dataBase;
};
//Busca o calaborador que for passado o ID no data base!
export const findColaboradoresById = async (id:number): Promise<ColoaboradorModel | undefined> => {
    return dataBase.find(colaborador => colaborador.id === id);
};
//insere o Colabordor no data base!
export const insertColaborador = async (colaborador: ColoaboradorModel) => {
    dataBase.push(colaborador);
};