import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './styles/Checkout.css'
import { CartContext } from '../context/CartContext.js';
import { async } from '@firebase/util';

const Checkout = () => {
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [email,setEmail] = useState("");
    const [telefono,setTelefono] = useState(0);
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);
    const { cart, deleteCart } = cartContext;
    

  //metodo para crear un Producto
  const productsCollection = collection(db, "pedidos");
  const store = async (e) => {
    e.preventDefault();
    await addDoc(productsCollection, {
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      pedido: cart,
    });
    deleteCart()
    navigate("/");
  };

    const [validated, setValidated] = useState(false);

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }setValidated(true)           
        ;
      };

      const create = async (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            handleSubmit(e)
        } else {
            store(e)
        }
      }

    return (
        <Form noValidate validated={validated} onSubmit={create}>
        <div>            
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01" value={nombre} onChange={(e)=>setNombre(e.target.value)}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nombre"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02" value={apellido} onChange={(e)=>setApellido(e.target.value)}>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Apellido"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername" value={email} onChange={(e)=>setEmail(e.target.value)}>
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">Email</InputGroup.Text>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Campo requerido.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" value={telefono} onChange={(e)=>setTelefono(e.target.value)}>
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="number" placeholder="Telefono" required />
                        <Form.Control.Feedback type="invalid">
                            Campo requerido.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Acepto los términos y condiciones"
                        feedback="Debe estar de acuerdo antes de enviar."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button className='button-primary button-padding' type="submit">Hacer pedido</Button>
            
        </div>
        </Form>
    )
}



export default Checkout;