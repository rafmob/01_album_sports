import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';

import button_add from '../img/button-add.svg'

const API = "http://localhost:5000";

function ModalForm() { 
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {

    const loadData = async() => {
      setLoading(true)

      const res = await fetch(API + "/todos")
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));

      setLoading(false);

      setTodos(res);

    }

    loadData()
  }, []);

  const [nome, setNome] = useState("");
  const [numeroCamisa, setNumeroCamisa] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [time, setTime] = useState("");
  const [imagem, setImagem] = useState("");
  const [historia, setHistoria] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(nome)
    console.log("Teste!")
    
    const todo = {
      id: Math.random(),
      nome,
      numeroCamisa,
      nascimento,
      time,
      imagem,
      historia
    };

    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      }
    });

    setTodos((prevState) => [...prevState, todo]);

    console.log("teste")

    setNome(""); //Zerar o input
    setNumeroCamisa("");
    setNascimento("");
    setTime("");
    setImagem("");
    setHistoria("");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button>
            <span>
                <img src={button_add} onClick={handleShow} alt="" />
            </span>
        </button>

      <Modal show={show} onHide={handleClose}>
        <div className='formModal' >
            <Modal.Header closeButton>
                <Modal.Title>ADICIONAR CARD</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="campo">
                        <label>Nome:</label>
                        <input
                            name='nome'
                            type="text"
                            placeholder="Escreva algo (input)"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome || ""}
                            required
                            />
                    </div>

                    <div className="campo">
                        <label>Nº:</label>
                        <input
                            name='numeroCamisa'
                            type="text"
                            placeholder="Escreva algo (input)"
                            onChange={(e) => setNumeroCamisa(e.target.value)}
                            value={numeroCamisa || ""}
                            required
                            />
                    </div>

                    <div className="campo">
                        <label>Ano de Nascimento:</label>
                        <input
                            name='nascimento'
                            type="number"
                            placeholder="Nascimento"
                            onChange={(e) => setNascimento(e.target.value)}
                            value={nascimento || ""}
                            required
                            />
                    </div>

                    <div className="campo">
                        <label>Time:</label>
                        <input
                            name='time'
                            type="text"
                            placeholder="Time do jogador"
                            onChange={(e) => setTime(e.target.value)}
                            value={time || ""}
                            required
                            />
                    </div>

                    <div className="campo">
                        <label>Foto:</label>
                        <input
                            name='imagem'
                            type="text"
                            placeholder="Link da Imagem"
                            onChange={(e) => setImagem(e.target.value)}
                            value={imagem || ""}
                            required
                            />
                    </div>
                    

                    <div className="campo">
                        <label>História:</label>
                        <input
                            name='historia'
                            type="textarea"
                            placeholder="Sobre o jogador"
                            onChange={(e) => setHistoria(e.target.value)}
                            value={historia || ""}
                            required
                            />
                    </div>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleClose}>
                            Salvar Card
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>
        </div>
        
      </Modal>
    </>
  );
}

export default ModalForm