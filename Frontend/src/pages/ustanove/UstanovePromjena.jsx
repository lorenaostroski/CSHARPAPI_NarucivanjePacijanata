import {  Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";

import { useEffect, useState } from "react";
import UstanovaService from "../../services/UstanovaService";









export default function UstanovePromjena(){

    const navigate = useNavigate();
    const routeParams= useParams();
    const [ustanova,setUstanova] = useState({});

    async function dohvatiUstanovu(){
        const odgovor = await UstanovaService.getBySifra(routeParams.sifra);
        if(odgovor.greska){
            alert(odgovor.poruka);
            return;
        }
        
        setUstanova(odgovor.poruka);
    }

    useEffect(()=>{
        dohvatiUstanova();
    });

    async function promjena(ustanova){
       // console.log(ustanova);
       // console.log(JSON.stringify(ustanova));
       const odgovor = await UstanovaService.promjena(routeParams.sifra,ustanova);
       if(odgovor.greska){
         alert(odgovor.poruka);
         return;
       }
       navigate(RoutesNames.USTANOVA_PREGLED);
       

    }

    function obradiSubmit(e){
        e.preventDefault();

        const podaci = new FormData(e.target);

        promjena({
            naziv:podaci.get('naziv'),
            adresa:podaci.get('adresa')
        });
    }

    return(
        <Container>
            Promjena ustanove
            
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required 
                    defaultValue={ustanova.naziv}/>
                </Form.Group>

                
                <Form.Group controlId="adresa">
                    <Form.Label>Adresa</Form.Label>
                    <Form.Control type="text" name="adresa" required
                    defaultValue={ustanova.adresa}/>
                </Form.Group>


            <hr />
             <Row>
                <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
                <Link to={RoutesNames.USTANOVA_PREGLED}
                className="btn btn-danger siroko">
                Odustani
                </Link>
                 </Col>
                <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
                <Button variant="primary" type="submit" className="siroko">
                    Promjeni ustanovu
                </Button>
                </Col>
             </Row>
            </Form>
        </Container>
    )
}