import './produtosCard.css';
import {Play} from 'lucide-react';

export function produtosCard({nome, descricao, imagem}){
    return(
        <div className="mare-card">

            <img src={imagem} alt={nome} className='card-img' />

            <div className="card-info">

                <h4>{nome}</h4>
                <p>{descricao}</p>

            </div>
            
        </div>
    )
}