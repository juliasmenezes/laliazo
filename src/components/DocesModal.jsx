import "./DocesModal.css";
import { X, Star } from "lucide-react";

export function DocesModal({ produto, onClose, onAdicionar }) {
  if (!produto) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        

        <img src={produto.imagem} alt={produto.nome} className="modal-banner" />


        <div className="modal-right-side">
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="modal-body">
            <div className="modal-header-status">
              <span className="modal-category">DOCE SELECIONADO</span>
            </div>
            
            <h2 className="nome">{produto.nome}</h2>
            <p className="description">{produto.descricao}</p>

            <div className="game-stats">
      
              <div className="stat">
                 <span style={{ fontWeight: 'bold', color: '#5f86a1', fontSize: '1.2rem' }}>
                   R$ {produto.preco.toFixed(2)}
                 </span>
              </div>
            </div>

            <button 
              className="start-game-btn" 
              onClick={() => {
                onAdicionar(produto); 
                onClose();
              }}
            >
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}