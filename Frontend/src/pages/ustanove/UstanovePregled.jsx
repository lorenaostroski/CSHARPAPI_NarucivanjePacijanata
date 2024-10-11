import { Container, Table } from "react-bootstrap";
import UstanovaService from "../../services/UstanovaService";
import { useEffect, useState } from "react";


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
        dohvatiUstanove
    },[]);
    

    return(
        <Container>
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
                            <td>{ustanova.sifra}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
         </Container>



    )
}

