/*Meu routers.ts vai ler meu controller */
import { Router } from "express";
import { getColaborador, getColaboradorById, postColaborador } from "./controller/colaborador-controller";
//Gerencia minhas rotas!
const router = Router();
 //Faz o get trazendo o arquivo importador do controller: getColaborador!
router.get("/colaborador", getColaborador);
 //Faz o get trazendo o arquivo importador do controller: getColaboradorById!
router.get("/colaborador/:id",getColaboradorById);
 //Faz o post par o meu dataBase importando o controller: postColaborador!
router.post("/colaborador", postColaborador)

export default router;