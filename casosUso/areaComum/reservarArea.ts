import {client} from '../../postgress/conexao'
import { v4 as uuidv4 } from 'uuid';

export class reservarAreaCaso{
    async resservarArea(reqParams: any, reqBody: any){
        const {id_condomino, id_area_comum} = reqParams;
        


        const verificaReserva = await client.query("SELECT * FROM reserva_area WHERE id_area=$1 RETURNING *",[id_reserva, titulo, descricao, status, id_condomino, id_area]);
        const id = uuidv4(); 
        const reserva = await client.query("INSERT INTO reserva_area(id_reserva, titulo, descricao, status, id_condomino) VALUES ($1, $2, $3, $4, $5) RETURNING *",[id_reserva, titulo, descricao, status, id_condomino, id_area]);
        return reserva.rows;
    }
}
