import {Request, Response} from 'express' 
import {alterarChamadoCaso} from '../casosUso/chamado/alterarChamadoCaso';
import {cancelarChamadoCaso} from '../casosUso/chamado/cancelarChamadoCaso';
import {consultarChamadoCaso} from '../casosUso/chamado/consultarChamadoCaso';
import {incluirChamadoCaso} from '../casosUso/chamado/incluirChamadoCaso';



export class chamadoControlador{
    async incluirChamado(request: Request, response: Response){
        const resultado = await new incluirChamadoCaso().incluirChamado(request.params,request.body);
        return response.status(201).json(resultado);
    }
    async alterarChamado(request: Request, response: Response){
        const resultado = await new alterarChamadoCaso().alterarChamado(request.params,request.body);

        return response.status(201).json(resultado);
    }
    async consultarChamado(request: Request, response: Response){

        const resultado = await new consultarChamadoCaso().consultarChamado();
        return response.status(201).json(resultado);
    }
    async cancelarChamado(request: Request, response: Response){

        const resultado = await new cancelarChamadoCaso().cancelarChamado(request.params);
        return response.status(201).json(resultado);
    }
    
}
