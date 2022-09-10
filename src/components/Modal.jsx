import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';

import button_add from '../img/button-add.svg'

function ModalForm() { 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
        <a className='btn_add' href="#">
            <img src={button_add} onClick={handleShow} alt="" />
        </a>

      <Modal show={show} onHide={handleClose}>
        <div className='formModal' >
            <Modal.Header closeButton>
                <Modal.Title>ADICIONAR CARD</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <section>
                <div className="campo">
                        <label>Nome:</label>
                        <input id='nome' type="text" placeholder="Escreva algo (input)"/>
                    </div>

                    <div className="campo">
                        <label>Nº:</label>
                        <input id='numero' type="text" placeholder="Escreva algo (input)"/>
                    </div>

                    <div className="campo">
                        <label>Idade:</label>
                        <input id='idade' type="text" placeholder="Escreva algo (input)"/>
                    </div>

                    <div className="campo">
                        <label>Time:</label>
                        <input id='time' type="text" placeholder="Escreva algo (input)"/>
                    </div>
                    <div className="campo">
                        <label>Time:</label>
                        <input id='time' type="text" placeholder="Escreva algo (input)"/>
                    </div>
                    <div className="campo">
                        <label>História:</label>
                        <input id='historia' type="textarea" placeholder="Escreva algo (input)"/>
                    </div>
                </section>
            </Modal.Body>
            
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </div>
        
      </Modal>
    </>
  );
}

export default ModalForm