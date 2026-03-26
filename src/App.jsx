import { produtos } from "./data/produtos";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <main className="mare-main">
      <Header />

      <div className="mare-content">
        <h1 className="section-title">Doces disponíveis</h1>

        <div className="mare-grid">
          {produtos.map((produto) => (
            <div className="card" key={produto.id}>
              <img src={produto.imagem} alt={produto.nome} />
              <h2>{produto.nome}</h2>
              <p>{produto.descricao}</p>
              <p>- Peso aprox: {produto.peso}</p>
              <span className="preco">
                R$ {produto.preco.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;