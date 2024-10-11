import { HttpService } from "./HttpService"



async function get(){
    return await HttpService.get('/Ustanova')
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return odgovor.data;
    })
    .catch((e)=>{console.eror(e)})
}

export default{
    get
}