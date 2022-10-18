import {Request, Response} from 'express' 
import {client} from '../../postgress/conexao'

export class deletarCondominoCaso{
    async deletarCondomino(reqParams:any){
        const {id} = reqParams;
        const condomino = await client.query('DELETE FROM condomino WHERE id=$1 RETURNING *',[id]);
        return condomino;
    }
}
