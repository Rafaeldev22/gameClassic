import { useState } from "react";
import "./Playstation.css"
import "../../cssGeral/cssGeral.css"

import jogosPs1 from "../../api/jogosPs1";

import Nav from "../../../componentes/nav/Nav";
import Modal from "../../../componentes/modal/Modal";
import Container from "../../../componentes/container/Container"

export default function Playstation() {

  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const handleOpenModal = (url) => {
    if (!url) {
      alert("Aguarde, estamos atualizando a pagina!");
      return;
    }

    setCurrentVideo(url);
    setShowModal(true);
  };

  const handleCloseModal = (url) => {
    setShowModal(false);
    setCurrentVideo(url);
  };

  return (
    <div className="box-play">
      <Nav />
      <div className="caixa">
        <div className="caixa-conteudo">
          {jogosPs1.map((item, index) => (
              <Container key={index} image={item.image} url={() => handleOpenModal(item.url)} nome={item.nome}/>
          ))}
        </div>
        <Modal
            show={showModal}
            onClose={handleCloseModal}
            videoSrc={currentVideo} // Insira a URL do vídeo aqui
          />
      </div>
    </div>
  );
}
