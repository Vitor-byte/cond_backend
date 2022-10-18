import{Response, Request} from 'express'
import {client} from '../../postgress/conexao'

export class alterarChamadoCaso{
    async alterarChamado(reqParams:any, reqBody:any){
        const id_usuario = reqParams;
        const {id_s, titulo, descricao, status} = reqBody;
        const chamado = await client.query("INSERT INTO solicitacao(id, titulo, descricao, status, id_usuario) VALUES ($1, $2, $3, $4, $5) RETURNING *",[id_s, titulo, descricao, status, id_usuario]);
        return chamado;
    }
}
