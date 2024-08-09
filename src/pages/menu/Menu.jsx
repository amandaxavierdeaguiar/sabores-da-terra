//Biblioteca essencial para o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Aqui importamos os componentes das páginas
import Header from "../../components/header/Header"
import ProdutosSalgados from "../../components/produtos/ProdutosSalgados"
import ProdutosPratoPrincipal from "../../components/produtos/ProdutosPratoPrincipal"
import ProdutosMassas from "../../components/produtos/ProdutosMassas"
import ProdutosSobremesa from "../../components/produtos/ProdutosSobremesa"
import Bebidas from "../../components/produtos/ProdutosBebidas"

import Footer from "../../components/footer/Footer"

//IMPORTAR PARA USAR FRAGMENTO DA PAGINA
import { useEffect } from 'react';


function Menu() {
    // Para renderização do componente. #
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.getElementById(hash.slice(1));
          if (element) {
            element.scrollIntoView();
          }
        }
      }, []);
    return(
        <div className="galeria-container">
            <Header />
            <div style={{ marginTop: '110px' }}>
                <div id="salgados">
                  <ProdutosSalgados/>
                </div>
                <div id="prato-principal">
                  <ProdutosPratoPrincipal/>
                </div>
                <div id="massas">
                  <ProdutosMassas/>
                </div>
                <div id="sobremesa">
                  <ProdutosSobremesa/>
                </div>
                <div id="bebidas">
                  <Bebidas />
                </div>
            </div>
            <Footer/>
        </div>       
    )
}

export default Menu
