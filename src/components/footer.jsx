import "./footer.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo e descrição */}
        <div className="footer-brand">
          <h2>Maré Doces</h2>
          <p>
            Transformando momentos simples em experiências deliciosas.
            Doces artesanais feitos com carinho 
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>

            <a href="https://web.whatsapp.com/">
              <FaWhatsapp />
            </a>

            <a href="https://www.facebook.com/?locale=pt_BR">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <div className="footer-links">
          <h3>Navegação</h3>

          <a href="#">Início</a>
          <a href="#">Doces</a>
          <a href="#">Mais pedidos</a>
          <a href="#">Contato</a>
        </div>

        {/* Contato */}
        <div className="footer-contact">
          <h3>Contato</h3>

          <p>(15) 99999-9999</p>
          <p>mare.doces@gmail.com</p>
          <p>Cerquilho - SP</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Maré Doces • Feito com carinho
        </p>
      </div>
    </footer>
  );
}

export default Footer;