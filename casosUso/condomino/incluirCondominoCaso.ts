import {client} from '../../postgress/conexao'
import { v4 as uuidv4 } from 'uuid';

export class incluirCondominoCaso{
    async incluirCondomino(reqBody:any){      
        const {rg, nome, login, senha, email } = reqBody;
        if(!validaEmail(email)){
            return "Email invalido!"
        }
        //const condomino = await client.query('SELECT rg FROM condomino WHERE rg=$1',[rg])
        
        const id = uuidv4();  
        const condomino = await client.query('INSERT INTO condomino(id_condomino, rg, nome_completo, login, senha, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING  *',
       [ 9, rg, nome, login, senha, email]);
        return condomino.rows;
    }
}

function validaEmail(email: any) {
    const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(email).toLowerCase())
  }
  
