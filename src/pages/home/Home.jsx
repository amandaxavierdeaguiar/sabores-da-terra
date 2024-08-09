//Biblioteca essencial para o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Aqui chamamos os componentes das páginas
import Header from "/components/header/Header"
import Banner from "/components/banner/Banner"
import Sobre from "/components/sobre/Sobre"
import Footer from "/components/footer/Footer"

function Home() {


    return(
        <body>    
            <Header/>             
            {/** Chamar os componentes da página desta forma. Nao esquecer de importa-los */}
            <Banner/>
            <Sobre/>
            <Footer/>
        </body>
    )
}

export default Home