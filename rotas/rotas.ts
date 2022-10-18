import {response, Router} from "express";
import {condominoControlador } from "../Controladores/condominoControlador"
import {chamadoControlador } from "../Controladores/chamadoControlador"
import { Response,Request } from "express";
import { avisoControlador } from "../Controladores/avisoControlador";
const router = Router();
// Condomino
router.post("/condomino", new condominoControlador().incluirCondomino);
router.get("/condominos", new condominoControlador().consultarCondomino);
router.patch("/condomino/:id", new condominoControlador().alterarCondomino);
router.delete("/condomino/:id", new condominoControlador().excluirCondomino);

// Aviso
router.post("/aviso", new avisoControlador().incluirAviso);
router.get("/avisos", new avisoControlador().consultarAviso);
router.patch("/aviso/:id", new avisoControlador().alterarAviso);
router.delete("/aviso/:id", new avisoControlador().excluirAviso);

//Chamado


//Area comum

//Enquete


export{router};