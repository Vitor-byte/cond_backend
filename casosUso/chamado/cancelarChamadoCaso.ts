import{Response, Request} from 'express'
import {client} from '../../postgress/conexao'

export class cancelarChamadoCaso{
    async cancelarChamado(reqParams:any){
        const id_usuario = reqParams;
        return;
    }
}
