import { Button, Container, Table } from "react-bootstrap";
import UstanovaService from "../../services/UstanovaService";
import { useEffect, useState } from "react";
import SmjerService from "../../services/SmjerService";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../constants";



export default function UstanovePregled(){

    const[ustanove,setUstanove]= useState();

    async function dohvatiUstanove(){

        await UstanovaService.get()
        .then((odgovor)=>{
            //console.log(odgovor);
            setUstanove(odgovor);
        })
        .catch((e)=>console.log(e));
    }

    useEffect(()=>{
        dohvatiUstanove();
    },[]);


    async function obrisiAsync(sifra) {
       const odgovor = SmjerService.obrisi(sifra);
       if(odgovor.greska){
         alert(odgovor.poruka);
         return;
       }
    }

    function obrisi(sifra){
        obrisiAsync(sifra);
    }
    

    return(
        <Container>
            <Link to={RoutesNames.USTANOVA_NOVI}>Dodaj novu ustanovu</Link>
            <Table striped bordered hover responsive>
                <thead>
                   <tr>
                    <th>Naziv</th>
                    <th>Adresa</th>
                    <th>Akcija</th>
                   </tr> 
                </thead>
                <tbody>
                    {ustanove && ustanove.map((ustanova,index)=>(
                        <tr key={index}>
                            <td>{ustanova.naziv}</td>
                            <td>{ustanova.adresa}</td>
                            <td>
                                <Button
                                variant="danger"
                                onClick={()=>obrisi(ustanova.sifra)}>
                                    Obriši
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
         </Container>



    )
}

