import { Link } from "react-router-dom";
import "./Home.css";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="conteudo-principal">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="conteudo"
      >
        <h2 className="titulo">Seja muito Bem-vindo!</h2>
        <p className="saudação">
          Bem-vindo ao portal dos jogos clássicos, Prepare-se para uma viagem
          nostálgica ao universo dos games que marcaram época. Reviva aventuras
          épicas, desafios emocionantes e a magia dos melhores jogos de todos os
          tempos. Clique em um dos links e comece sua jornada agora!
        </p>
        <div className="lista-links">
          <ul className="lista">
            <Link to="/nintendo" className="tag-link">
              <li className="link">Nintendo</li>
            </Link>
            <Link to="/playstation" className="tag-link">
              <li className="link">Playstation</li>
            </Link>
            <Link to="/sega" className="tag-link">
              <li className="link">Mega Drive</li>
            </Link>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
