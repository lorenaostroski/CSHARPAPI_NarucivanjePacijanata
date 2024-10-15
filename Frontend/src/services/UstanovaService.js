import { HttpService } from "./HttpService"


async function get(){
    return await HttpService.get('/Ustanova/')
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return odgovor.data;
    })
    .catch((e)=>{console.error(e)})
}
async function getBySifra(sifra){
    return await HttpService.get('/Ustanova/'+ sifra)
    .then((odgovor)=>{
        return{greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return{greska: true, poruka:'Ne postoji ustanova!'}
    })
}
async function obrisi(sifra) {
    return await HttpService.delete('/Ustanova/' + sifra)
    .then((odgovor)=>{
        return{greska: false, poruka: odgovor.data.poruka}
    })
    .catch((e)=>{
        return{greska: true, poruka:'Ustanova se ne može obrisati'}
    })
}
async function dodaj(ustanova) {
    return await HttpService.post('/Ustanova/', ustanova)
    .then((odgovor)=>{
        return{greska: false, poruka: odgovor.data.poruka}
    })
    .catch((e)=>{
        return{greska: true, poruka:'Ustanova se ne može dodati'}
    })
}
async function promjena(sifra,ustanova) {
    return await HttpService.put('/Ustanova/'+ sifra,ustanova)
    .then((odgovor)=>{
        return{greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return{greska: true, poruka:'Ustanova se ne može promjeniti'}
    })

}

export default{
    get,
    getBySifra,
    obrisi,
    dodaj,
    promjena
}