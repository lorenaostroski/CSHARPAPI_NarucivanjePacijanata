import { HttpService } from "./HttpService"


async function get(){
    return await HttpService.get('/Smjer')
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return odgovor.data;
    })
    .catch((e)=>{console.error(e)})
}

async function getBySifra(sifra){
    return await HttpService.get('/Smjer/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Ne postoji smjer!'}
    })
}

async function obrisi(sifra) {
    return await HttpService.delete('/Smjer/' + sifra)
    .then((odgovor)=>{
        //console.log(odgovor);
       return odgovor;
    })
    .catch((e)=>{
        //console.log(e);
        return {greska: true, poruka: 'Smjer se ne može obrisati!'}
    })
}

async function dodaj(smjer) {
    return await HttpService.post('/Smjer',smjer)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Smjer se ne može dodati!'}
    })
}

async function promjena(sifra,smjer) {
    return await HttpService.put('/Smjer/' + sifra,smjer)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Smjer se ne može promjeniti!'}
    })
}

export default{
    get,
    getBySifra,
    obrisi,
    dodaj,
    promjena
}