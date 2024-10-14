import {  Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../constants";








export default function UstanoveDodaj(){

    return(
        <Container>
            Dodavanje novog smjera
            
            <Form>
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
                    Dodaj novi smjer
                </Button>
                </Col>
             </Row>
            </Form>
        </Container>
    )
}