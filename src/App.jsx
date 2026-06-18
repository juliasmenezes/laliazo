import { useState, useEffect } from "react";
import { produtosData } from "./data/produtos";
import { Header } from "./components/Header";
import { DocesModal } from "./components/DocesModal";
import Slider from "./components/Slider";
import { SwiperSlide } from "swiper/react";
import Footer from "./components/footer";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("dash");
  const [carrinho, setCarrinho] = useState([]);
  const [selectedProduto, setSelectedProduto] = useState(null);

  const [alerta, setAlerta] = useState({ mensagem: "", visivel: false, tipo: "" });
  const mostrarAlerta = (mensagem, tipo) => {
    setAlerta({ mensagem, visivel: true, tipo });
  };
  useEffect(() => {
    if (alerta.visivel) {
      const timer = setTimeout(() => {
        setAlerta({ mensagem: "", visivel: false, tipo: "" });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alerta.visivel]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((carrinhoAtual) => {
      const itemExiste = carrinhoAtual.find((item) => item.id === produto.id);

      if (itemExiste) {
        return carrinhoAtual.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }

      return [...carrinhoAtual, { ...produto, quantidade: 1 }];
    });
    mostrarAlerta(`${produto.nome} adicionado ao carrinho!`, "sucesso");
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho((carrinhoAtual) => {
      const itemNoCarrinho = carrinhoAtual.find((item) => item.id === produtoId);

      if (itemNoCarrinho.quantidade > 1) {
        return carrinhoAtual.map((item) =>
          item.id === produtoId ? { ...item, quantidade: item.quantidade - 1 } : item
        );
      }

      return carrinhoAtual.filter((item) => item.id !== produtoId);
    });
    mostrarAlerta(`Item removido do carrinho.`, "removido");
  };

  const filteredProdutos = (
    activeTab === "dash" ? produtosData : carrinho
  ).filter((p) =>
    p.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mare-app">
      {alerta.visivel && (
        <div className={`toast-alerta ${alerta.tipo}`}>
          {alerta.mensagem}
        </div>
      )}
      <main className="mare-main">
        <Header
          search={search}
          setSearch={setSearch}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          itensNoCarrinho={carrinho.length}
        />

        {/* SLIDER */}
        {activeTab === "dash" && (
          <div className="container-slider">
            <Slider>
              {produtosData.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div
                    className="slide-content"
                    onClick={() => setSelectedProduto(slide)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={slide.imagem || slide.banner}
                      alt={slide.nome || slide.title}
                    />

                    <div className="slide-overlay">
                      <span>{slide.nome || slide.title}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Slider>
          </div>
        )}

        {/* CONTEÚDO */}
        <div className="mare-content">
          <h2 className="section-title">
            {activeTab === "dash" ? "Doces Disponíveis" : "Meu Carrinho"}
          </h2>

          {/* Se o carrinho estiver vazio na aba de carrinho, mostra um aviso */}
          {activeTab !== "dash" && carrinho.length === 0 ? (
            <div className="carrinho-vazio">
              <p>Sua sacola está vazia. Que tal adicionar alguns doces?</p>
              <button className="btn-voltar" onClick={() => setActiveTab("dash")}>
                Ver Doces Disponíveis
              </button>
            </div>
          ) : (
            <div className="carrinho-layout-container">

              {/* Grid de Produtos */}
              <div className="mare-grid">
                {filteredProdutos.map((p, index) => (
                  <div className="card" key={p.id || index}>
                    <img
                      src={p.imagem}
                      alt={p.nome}
                      className="card-img"
                      onClick={() => setSelectedProduto(p)}
                      style={{ cursor: "pointer" }}
                    />

                    <div className="card-info">
                      <h2 onClick={() => setSelectedProduto(p)} style={{ cursor: "pointer" }}>
                        {p.nome}
                      </h2>

                      <span className="preco">
                        R$ {p.preco.toFixed(2)}
                      </span>

                      {activeTab === "dash" && (
                        <button
                          className="btn-add"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProduto(p);
                          }}
                        >
                          Saiba mais
                        </button>
                      )}

                      {activeTab !== "dash" && (
                        <div className="carrinho-controles">
                          <div className="quantidade-selector">
                            <button onClick={() => removerDoCarrinho(p.id)}>-</button>
                            <span>{p.quantidade}x</span>
                            <button onClick={() => adicionarAoCarrinho(p)}>+</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* PAINEL DE SIMULAÇÃO DE COMPRA */}
              {activeTab !== "dash" && carrinho.length > 0 && (
                <div className="checkout-simulador">
                  <h3>Resumo da Compra</h3>

                  <div className="checkout-linhas">
                    <div className="checkout-linha">
                      <span>Subtotal ({carrinho.reduce((acc, item) => acc + item.quantidade, 0)} itens)</span>
                      <span>R$ {carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0).toFixed(2)}</span>
                    </div>
                    <div className="checkout-linha">
                      <span>Entrega</span>
                      <span className="entrega-gratis">GRÁTIS</span>
                    </div>
                    <hr className="checkout-divisor" />
                    <div className="checkout-linha total">
                      <span>Total Estimado</span>
                      <span>R$ {carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0).toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    className="btn-finalizar-compra"
                    onClick={() => {
                      mostrarAlerta("Pedido recebido com sucesso! Preparando seus doces...", "sucesso");
                      setCarrinho([]); 
                      setActiveTab("dash"); 
                    }}
                  >
                    FINALIZAR PEDIDO
                  </button>
                </div>
              )}

            </div>
          )}
        </div>
      </main>

      {/* MODAL */}
      {selectedProduto && (
        <DocesModal
          produto={selectedProduto}
          onClose={() => setSelectedProduto(null)}
          onAdicionar={adicionarAoCarrinho}
        />
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;