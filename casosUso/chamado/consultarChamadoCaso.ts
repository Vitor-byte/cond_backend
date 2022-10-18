import{Response, Request} from 'express'
import {client} from '../../postgress/conexao'

export class consultarChamadoCaso{
    async consultarChamado(){
        const chamado = await client.query('SELECT * FROM chamado');
        return chamado;
    }
}
