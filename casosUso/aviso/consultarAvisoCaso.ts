import {client} from '../../postgress/conexao'

export class consultarAvisoCaso{
    async consultarAviso(){
        const aviso = await client.query('SELECT * FROM aviso');
        return aviso.rows;
    }
}
