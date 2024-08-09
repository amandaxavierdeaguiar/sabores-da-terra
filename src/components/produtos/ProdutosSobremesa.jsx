import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './produtos.css'
import * as Icon from 'react-bootstrap-icons';
import { useCart } from 'react-use-cart';
// FOTO SOBREMESA
import imgBolo from '../../assets/produtos/sobremesa/bolo-chocolate-pote.png';
import imgCanjica from '../../assets/produtos/sobremesa/canjica.png';
import imgArrozDoce from '../../assets/produtos/sobremesa/arroz-doce.png';
import imgPudim from '../../assets/produtos/sobremesa/pudim.png';
import imgBrigadeiros from '../../assets/produtos/sobremesa/brigadeiros.png';
import imgBeijinho from '../../assets/produtos/sobremesa/beijinho.png';
import imgQuindim from '../../assets/produtos/sobremesa/quindim.png';
import imgCocada from '../../assets/produtos/sobremesa/cocada.png';
import imgPacoca from '../../assets/produtos/sobremesa/pacoca.png';

// MENU DE SOBREMESA
const sobremesa = [
    {
        id: 31,
        name: 'Bolo de de Pote',
        description: 'Bolo de chocolate cremoso e rico, servido em um pote.',
        price: 8.00,
        units: 10,
        imageUrl: imgBolo,
      },
      {
        id: 32,
        name: 'Canjica',
        description: 'Doce típico brasileiro feito com milho, leite e açúcar.',
        price: 6.00,
        units: 15,
        imageUrl: imgCanjica,
      },
      {
        id: 33,
        name: 'Arroz Doce',
        description: 'Arroz cozido com leite, açúcar e canela, servido quente.',
        price: 5.00,
        units: 20,
        imageUrl: imgArrozDoce,
      },
      {
        id: 34,
        name: 'Pudim',
        description: 'Pudim cremoso e rico, feito com leite condensado, açúcar e ovos.',
        price: 7.00,
        units: 12,
        imageUrl: imgPudim,
      },
      {
        id: 35,
        name: 'Brigadeiros',
        description: 'Docinhos de chocolate e leite condensado com chocolate granulado.',
        price: 10.00,
        units: 8,
        imageUrl: imgBrigadeiros,
      },
      {
        id: 36,
        name: 'Beijinhos',
        description: 'Docinhos de coco e leite condensado, enrolados em coco ralado.',
        price: 9.00,
        units: 10,
        imageUrl: imgBeijinho,
      },
      {
        id: 37,
        name: 'Mini Quindim',
        description: 'Docinhos de coco e ovos e polvilhados com açúcar e com crosta de coco queimado.',
        price: 8.00,
        units: 12,
        imageUrl: imgQuindim,
      },
      {
        id: 38,
        name: 'Cocada',
        description: 'Docinho de coco e açúcar, assado até ficar crocante e dourado.',
        price: 7.00,
        units: 15,
        imageUrl: imgCocada,
      },
      {
        id: 39,
        name: 'Paçoca',
        description: 'Docinho de amendoim e açúcar, assado até ficar crocante e dourado.',
        price: 8.50,
        units: 12,
        imageUrl: imgPacoca,
      },
];

function ProdutosSobremesa() {
  //CHAMANDO A BIBLIOTECA useCart
  const { addItem } = useCart();
    return (
        <Container>
          <Row >
            <h1 className="title-produtos">SOBREMESAS</h1>
            {sobremesa.map((produto, i) => (
              <Col md={4} className="mb-4" key={produto.id}>
                <Card className="card-produto">
                  <Row>
                    <Col md={4} >
                      <img className='image-circle' src={produto.imageUrl} alt={produto.name} />
                    </Col>
                    <Col md={8}>
                      <Card.Title className='titleProduct'>{produto.name}</Card.Title>
                      <Card.Text className='txtProduct'>{produto.description}</Card.Text>
                      <Card.Text className='priceProduct'>{produto.price.toFixed(2)}€</Card.Text>
                      {/** INSERINDO LIGACAO DO ONCLICK COM A BOBLIOTECA DE ADD ITEM */}
                      <button className="payProduct" onClick={() => addItem(produto)}>
                        Comprar <Icon.CartPlus/>
                      </button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
    );
  }

export default ProdutosSobremesa;