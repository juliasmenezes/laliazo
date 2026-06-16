import "./Header.css";
import { Waves, Handbag, Store, Search } from "lucide-react";

export function Header({ activeTab, setActiveTab, itensNoCarrinho, search, setSearch }) {
  return (
    <header className="mare-header">
      <div className="user-info">
        <h3>
          Bem-vindo à <span className="destaque" onClick={() => setActiveTab("dash")} style={{ cursor: 'pointer' }}>Maré Doces</span>
        </h3>
        <p>Peça seus doces favoritos!</p>
      </div>

     
      <div className="search-bar">
        <Search size={18} color='#94a3b8' />
        <input 
          type="text" 
          placeholder='Buscar doces...' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      <div className="header-actions">
        {activeTab !== "dash" && (
           <button className="btn-nav" onClick={() => setActiveTab("dash")}>
             <Store size={20} />
             <span>Loja</span>
           </button>
        )}

        <div className="badge">
          <Waves size={14} />
          <span>CLIENTE FIEL</span>
        </div>

        <button 
          className={`notificacoes ${activeTab === "cart" ? "active" : ""}`}
          onClick={() => setActiveTab("cart")}
        >
          <Handbag size={20} />
          {itensNoCarrinho > 0 && (
            <span className="cart-count">{itensNoCarrinho}</span>
          )}
        </button>
      </div>
    </header>
  );
}