/*Meu routers.ts vai ler meu controller */
import { Router } from "express";
import { deleteColaborador, getColaborador, getColaboradorById, postColaborador, updateColaborador } from "./controller/colaborador-controller";
//Gerencia minhas rotas!
const router = Router();
 //Faz o get trazendo o arquivo importador do controller: getColaborador!
router.get("/colaborador", getColaborador);
 //Faz o get trazendo o arquivo importador do controller: getColaboradorById!
router.get("/colaborador/:id",getColaboradorById);
 //Faz o post para o meu dataBase importando o controller: postColaborador!
router.post("/colaborador", postColaborador);
 //Faz o delete para o meu dataBase importando o controller: deleteColaborador!
router.delete("/colaborador/:id", deleteColaborador);

router.patch("/colaborador/:id", updateColaborador);
export default router;