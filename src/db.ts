import {RowDataPacket, createConnection} from"mysql2"

export const Connect=createConnection({host:"localhost",password:"Matyas53",user:"KM",port:3306,database:"test",})

export interface Ember extends RowDataPacket{
    name:string
}
export class REPO{
    readall():Promise<Ember[]>{
        return new Promise((resolve,reject)=>{
            Connect.query<Ember[]>("Select * from emberek",(err,res)=>{
                if (err) throw (err)
                else resolve(res)
            })
        })
    }
}
