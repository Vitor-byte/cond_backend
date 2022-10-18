import {Request, Response} from 'express' 
import { alterarCondominoCaso} from '../casosUso/condomino/alterarCondominoCaso';
import { incluirCondominoCaso} from '../casosUso/condomino/incluirCondominoCaso';
import { consultarCondominoCaso} from '../casosUso/condomino/consultarCondominosCaso';
import { deletarCondominoCaso} from '../casosUso/condomino/deletarCondominoCaso';



export class condominoControlador{
    async incluirCondomino(request: Request, response: Response){
        const resultado = await new incluirCondominoCaso().incluirCondomino(request.body);
        return response.status(201).json(resultado);
    }
    async alterarCondomino(request: Request, response: Response){
        const resultado = await new alterarCondominoCaso().alterarCondomino(request.params,request.body);
        return response.status(201).json(resultado);
    }
    async consultarCondomino(request: Request, response: Response){

        const resultado = await new consultarCondominoCaso().consultarCondominos(request.params);
        return response.status(201).json(resultado);
    }
    async consultarCondominoId(request: Request, response: Response){

        const resultado = await new consultarCondominoCaso().consultarCondominoId(request.params);
        return response.status(204).json(resultado);
    }
    async excluirCondomino(request: Request, response: Response){
        const resultado = await new deletarCondominoCaso().deletarCondomino(request.params);

        return response.status(204).json(resultado);
    }
}