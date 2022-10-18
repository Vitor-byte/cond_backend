import {client} from '../../postgress/conexao'
import { v4 as uuidv4 } from 'uuid';

export class incluirAreaCaso{
    async incluirArea(reqParams: any, reqBody: any){
        const {id_area} = reqParams;
        const {titulo, descricao, status} = reqBody;


        const id = uuidv4();  
        const area = await client.query("INSERT INTO area(id, titulo, descricao, status, id_condomino) VALUES ($1, $2, $3, $4, $5) RETURNING *",[id_area, titulo, descricao, status, id_sindico]);
        return area.rows;
    }
}
