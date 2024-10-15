import {  Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import UstanovaService from "../../services/UstanovaService";








export default function UstanoveDodaj(){

    const navigate = useNavigate();

    async function dodaj(ustanova){
       // console.log(ustanova);
       // console.log(JSON.stringify(ustanova));
       const odgovor = await UstanovaService.dodaj(ustanova);
       if(odgovor.greska){
         alert(odgovor.poruka);
         return;
       }
       navigate(RoutesNames.USTANOVA_PREGLED);
       

    }

    function obradiSubmit(e){
        e.preventDefault();

        const podaci = new FormData(e.target);

        dodaj({
            naziv:podaci.get('naziv'),
            adresa:podaci.get('adresa')
        });
    }

    return(
        <Container>
            Dodavanje nove ustanove
            
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required/>
                </Form.Group>

                
                <Form.Group controlId="adresa">
                    <Form.Label>Adresa</Form.Label>
                    <Form.Control type="text" name="adresa"/>
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
                    Dodaj novu ustanovu
                </Button>
                </Col>
             </Row>
            </Form>
        </Container>
    )
}