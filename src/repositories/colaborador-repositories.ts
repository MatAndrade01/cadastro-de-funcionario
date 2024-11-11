import { propertiesModel } from "../models/propeties-model";
import { ColaboradorModel } from "../models/colaborador-model";

const dataBase: ColaboradorModel[] = [
    {
        id: 1,
        properties: {
            name: "Matheus",
            functionCollaborator: "Assistente de TI",
            day: 14,
            month: 10
        },

    },
    {
        id: 2,
        properties: {
            name: "Matias",
            functionCollaborator: "Analisata de TI",
            day: 16,
            month: 6
        },
    },
];
//Busca todos os colaboradores no data base!
export const findAllColaboradores = async (): Promise<ColaboradorModel[]> => {
    return dataBase;
};
//Busca o calaborador que for passado o ID no data base!
export const findColaboradoresById = async (id:number): Promise<ColaboradorModel | undefined> => {
    return dataBase.find(colaborador => colaborador.id === id);
};
//Insere o Colabordor no data base!
export const insertColaborador = async (colaborador: ColaboradorModel) => {
    dataBase.push(colaborador);
};
//Deleta o Colabordor no data base!
export const deleteOneColaborador = async (id: number) => {
    //Busca para saber se o ID passado está no data base!
    const index = dataBase.findIndex(colaborador => colaborador.id === id);
    //Verifica se o index é diferente de -1, pois se caso o id não existi a respota de cima seria -1!
    if(index !== -1) {
        dataBase.splice(index, 1);
        return true
    }

    return false
}

export const findAndModifyColaborador = async(id: number, properties: propertiesModel): Promise<ColaboradorModel> => {
    //Busca para saber se o ID passado está no data base!
    const colaboradorIndex = dataBase.findIndex(colaborador => colaborador.id === id);
    //Verifica se o index é diferente de -1, pois se caso o id não existi a respota de cima seria -1!
    if (colaboradorIndex !== -1) {
        //Faz a aterção das propriedades!
        dataBase[colaboradorIndex].properties = properties;
    }
    return dataBase[colaboradorIndex];
}
