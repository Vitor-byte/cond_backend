import {Request, Response} from 'express' 
import {client} from '../../postgress/conexao'



export class consultarCondominoCaso{
    async consultarCondominoId(reqParams: any){
        const {id} = reqParams;
        const condomino = await client.query('SELECT * FROM condomino WHERE id=$1',[id]);
        return condomino;
    }
    async consultarCondominos(reqParams: any){
        const {quantidade} = reqParams;
        const condominos = await client.query('SELECT * FROM condomino LIMIT 10');
        return condominos.rows;
    }
}
