import "./Header.css";
import { Waves, Handbag } from "lucide-react";

export function Header() {
  return (
    <header className="mare-header">
      <div className="user-info">
        <h3>
          Bem-vindo à <span className="destaque">Maré Doces</span>
        </h3>
        <p>Peça seus doces favoritos 🍫</p>
      </div>

      <div className="header-actions">
        <div className="badge">
          <Waves size={14} />
          <span>CLIENTE FIEL</span>
        </div>

        <button className="notificacoes">
          <Handbag size={20} />
        </button>
      </div>
    </header>
  );
}