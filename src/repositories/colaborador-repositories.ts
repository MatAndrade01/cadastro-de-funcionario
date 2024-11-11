import { propertiesModel } from "../models/propeties-model";
import { ColaboradorModel } from "../models/colaborador-model";
import { cliente } from "../data/colaboradores-data";

// Função para carregar todos os colaboradores do banco de dados
export const findAllColaboradores = async (): Promise<ColaboradorModel[]> => {
  const dataBase = await cliente.query('SELECT * FROM pessoas');
  return dataBase.rows; // Retorna todos os colaboradores
};

// Busca o colaborador pelo ID no banco de dados
export const findColaboradoresById = async (id: number): Promise<ColaboradorModel | undefined> => {
  const dataBase = await cliente.query('SELECT * FROM pessoas WHERE id = $1', [id]);
  return dataBase.rows[0]; // Retorna o colaborador encontrado ou undefined
};

// Insere um colaborador no banco de dados
export const insertColaborador = async (colaborador: ColaboradorModel): Promise<void> => {
  const query = `
    INSERT INTO pessoas (name, functioncollaborator, day, month)
    VALUES ($1, $2, $3, $4) RETURNING id;
  `;
  const values = [colaborador.name, colaborador.functioncollaborator, colaborador.day, colaborador.month];
  const dataBase = await cliente.query(query, values);

  console.log('Novo colaborador inserido com ID:', dataBase.rows[0].id); // Logando o id do novo colaborador
};

// Deleta um colaborador pelo ID no banco de dados
export const deleteOneColaborador = async (id: number): Promise<boolean> => {
  const query = 'DELETE FROM pessoas WHERE id = $1';
  const result = await cliente.query(query, [id]);

  return result.rowCount > 0; // Retorna true se o colaborador foi deletado, caso contrário false
};

// Busca e modifica um colaborador pelo ID e propriedades fornecidas
export const findAndModifyColaborador = async (id: number, properties: propertiesModel): Promise<ColaboradorModel | undefined> => {
  const query = `
    UPDATE pessoas
    SET name = $1, functioncollaborator = $2, day = $3, month = $4
    WHERE id = $5
    RETURNING *;
  `;
  const values = [properties.name, properties.functioncollaborator, properties.day, properties.month, id];

  const dataBase = await cliente.query(query, values);
  
  return dataBase.rows[0]; // Retorna o colaborador atualizado ou undefined
};
