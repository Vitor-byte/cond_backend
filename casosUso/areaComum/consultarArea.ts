import{Response, Request} from 'express'
import {client} from '../../postgress/conexao'

export class consultarAreaCaso{
    async consultarArea(){
        const chamado = await client.query('SELECT * FROM chamado');
        return chamado;
    }
}
