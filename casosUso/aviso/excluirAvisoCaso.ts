import {client} from '../../postgress/conexao'

export class excluirAvisoCaso{
    async excluirAviso(reqParams:any){
        const {id} = reqParams;
        const aviso = await client.query('DELETE FROM aviso WHERE id_aviso=$1 RETURNING *',[id]);
        return aviso.rows;
    }
}
