// IMPORTAÇÃO
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import './menuPrincipal.css'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import background from '../../assets/menuPrincipal/bandeira3.png';

// IMPORTAR FOTOS 
import massas from "../../assets/menuPrincipal/massas.png";
import pratoPrincipal from "../../assets/menuPrincipal/pratoPrincipal.png";
import bebidas from "../../assets/menuPrincipal/bebidas.png";
import sobremesa from "../../assets/menuPrincipal/quindim.png";
import snacks from "../../assets/menuPrincipal/salgados.png";
import bandeira from "../../assets/menuPrincipal/bandeira1.png";


// pegar fragmento da pagina com produtos
import { Link } from 'react-router-dom';

function MenuPrincipal(){

    return(
        <body className='bodyprincipal' style={{ backgroundImage: `url(${background})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',   
        backgroundPosition: 'center'}}>
            <Header/>
            <h1 className="title-produtos" style={{paddingTop: '150px'}}>Comidas Regionais<img src={bandeira} alt="bandeira Brasil" className="bandeirinha" style={{height: '50px'}}/></h1> 
            <Container className='menu' >            
                <Link to="/menu#bebidas"><img src={bebidas} alt="Bebidas" className="img"/></Link>
                <Link to="/menu#prato-principal"><img src={pratoPrincipal} alt="Prato Principal" className="img"/></Link>
                <Link to="/menu#salgados"><img src={snacks} alt="Salgados" className="img"/></Link>
                
            </Container>
            <Container className='menu2' style={{marginTop: '-120px'}} >            
                <Link to="/menu#massas"><img src={massas} alt="Massas" className="imgBaixo1"/></Link>
                <Link to="/menu#sobremesa"><img src={sobremesa} alt="Sobremesa" className="imgBaixo2" /></Link>
            </Container>
            <Footer/> 
        </body>
    );
}

export default MenuPrincipal
