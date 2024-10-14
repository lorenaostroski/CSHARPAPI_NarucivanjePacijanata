import { HttpService } from "./HttpService"



async function get(){
    return await HttpService.get('/Ustanova')
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return odgovor.data;
    })
    .catch((e)=>{console.error(e)})
}
async function obrisi(sifra) {
    return await HttpService.delete('/Ustanova/' + sifra)
    .then((odgovor)=>{
        return{greska: false, poruka: odgovor.data.poruka}
    })
    .catch((e)=>{
        return{greska: true, poruka:'Smjer se ne može obrisati'}
    })
}

export default{
    get,
    obrisi
}