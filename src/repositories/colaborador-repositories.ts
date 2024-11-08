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
]

export const findAllColaboradores = async (): Promise<ColoaboradorModel[]> => {
    return dataBase;
};

export const findColaboradoresById = async (id:number): Promise<ColoaboradorModel | undefined> => {
    return dataBase.find(colaborador => colaborador.id === id);
};