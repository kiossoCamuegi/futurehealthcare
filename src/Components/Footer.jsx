import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Logo = require("../images/logo1.png")


function Footer() {
  return (
    <div className="Footer">
      <div className="wrapper">
        <div className="footer-content">
          <div className="txt">
            <img src={Logo} />
            <p>
              Posicionamo-nos como especialistas em desenvolvimento e gestão de planos de serviços médicos, seguros de saúde e outros sistemas de saúde,
              que disponibilizamos ao mercado através de clientes institucionais ou directamente ao cliente final.
            </p>
            <div className="icons">
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaFacebook /></a>
            </div>
          </div>
          <div className="links" >
            <section>
              <h3>Navegação</h3>
              <Link to="#">Inicio</Link>
              <Link to="#">Sobre nós</Link>
              <Link to="#">Serviços</Link>
              <Link to="#">Comição executiva</Link>
              <Link to="#">Ensights</Link>
            </section>
            <section>
              <h3>Suporte</h3>
              <Link to="#">Faqs</Link>
              <Link to="#">Contactos</Link>
              <Link to="#">Centro de suporte</Link>
              <Link to="#">Segurança</Link>
              <Link to="#">Livro de reclamações</Link>
              <Link to="#">Livro de elogios</Link>
            </section>
            <section>
              <h3>Serviços</h3>
              <Link to="#">Operações</Link>
              <Link to="#">Tecnologia</Link>
              <Link to="#">Gestão de risco</Link>
              <Link to="#">Distribuição</Link>
              <Link to="#">Saúde digital</Link>
            </section>
          </div>
        </div>
        <div className="footer-dets">
          <div><span>©FutureHealthcare 2024 All Rights Reserved</span></div>
          <ul>
             <li>Termos & Condições</li>
             <li>Politicas de privacidade</li> 
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer