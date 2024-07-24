import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="conteudo-principal">
      <div className="conteudo">
        <h2 className="titulo">Seja muito Bem-vindo!</h2>
        <p className="saudação">Bem-vindo ao portal dos jogos clássicos, Prepare-se para uma viagem nostálgica ao universo dos games que marcaram época. Reviva aventuras épicas, desafios emocionantes e a magia dos melhores jogos de todos os tempos. Clique em um dos links e comece sua jornada agora!</p>
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
      </div>
    </div>
  );
}
