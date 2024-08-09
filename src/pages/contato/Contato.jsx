import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "/components/header/Header"
import Footer from "/components/footer/Footer"
// IMPORTANDO COMPONENTS DA PAGE
import Formulario from "/components/formulario/Formulario"
import Mapa from "/components/mapa/Mapa"

function Contato(){
    return(
        <body>
            <Header />
            <div className='formularioContato' >
                <Formulario />
            </div>
            <div className='mapaContato' style={{marginBottom: '-50px'}}>
                <Mapa />
            </div>
            <Footer />
        </body>
    )
}

export default Contato