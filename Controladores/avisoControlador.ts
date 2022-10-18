import {Request, Response} from 'express' 
import { alterarAvisoCaso } from '../casosUso/aviso/alterarAvisoCaso';
import { consultarAvisoCaso } from '../casosUso/aviso/consultarAvisoCaso';
import { excluirAvisoCaso } from '../casosUso/aviso/excluirAvisoCaso';
import { incluirAvisoCaso } from '../casosUso/aviso/incluirAvisoCaso';

export class avisoControlador{
    async incluirAviso(request: Request, response: Response){
        const resultado = await new incluirAvisoCaso().incluirAviso(request.body);
        return response.status(201).json(resultado);
    }
    async alterarAviso(request: Request, response: Response){
        const resultado = await new alterarAvisoCaso().alterarAviso(request.params,request.body);
        return response.status(201).json(resultado);
    }
    async consultarAviso(request: Request, response: Response){

        const resultado = await new consultarAvisoCaso().consultarAviso();
        return response.status(201).json(resultado);
    }
    async excluirAviso(request: Request, response: Response){
        const resultado = await new excluirAvisoCaso().excluirAviso(request.params);
        return response.status(201).json(resultado);

    }
}