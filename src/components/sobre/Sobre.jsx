import {Container, Image} from 'react-bootstrap'
import './sobre.css'
import Reserva from '../formulario/Reserva';
import proprietario from '../../assets/fotoConjunto.png';

function Sobre(){

    // foto Restaurante e proprietario
    /*const restauranteProprietario = "/assets/fotoConjunto.png";*/

    return (
        <Container className='container'>
            <div className="image-container">
                <Image src={proprietario} alt="Restaurant image"/>
            </div>
            <div className="content">
                <h1>Sobre nós</h1>
                <h2>A combinação perfeita entre sabores e ritmos brasileiros.</h2>
                <p>Nossos pratos são preparados com ingredientes frescos e selecionados, cuidadosamente elaborados para proporcionar uma experiência única de sabores e aromas da culinária brasileira. <br></br>No nosso restaurante, você pode desfrutar de um ambiente acolhedor e descontraído, com um atendimento atencioso e personalizado. Além disso, contamos com um sistema de pedidos online, para que você possa fazer sua escolha de forma rápida e prática, garantindo a entrega dos seus pratos favoritos com segurança e comodidade.<br></br>Para os amantes de uma boa bebida, temos a nossa caipirinha feita no capricho com o melhor da cachaça brasileira e limões direto da nossa horta, perfeito para matar a saudade da nossa terrinha.<br></br>Venha nos visitar e descubra o verdadeiro sabor do Brasil em cada detalhe.</p>
                <div className="reserva">
                    <Reserva />
                </div>
            </div>
        </Container>
    )
}

export default Sobre
