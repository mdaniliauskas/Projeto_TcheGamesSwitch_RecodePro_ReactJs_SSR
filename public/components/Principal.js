import { Container, Row } from 'react-bootstrap';
import Image from 'next/image'


function Principal() {
    return (
        
        <Container>
                    
        <br /><br /><br /><br /><br /><br /><br />


        <h3>Seja bem-vindo(a)!</h3>
        <br /><br />

        <Row className="justify-content-center">
            <p>A Tche Games Switch é a sua loja especializada em Nintendo Switch&trade;</p>
            <p>Aqui você encontra todos os últimos lançamentos, os melhores preços e entrega rápida de consoles, jogos e acessórios!</p> 
            <p>Em nosso site e em nossas lojas você sempre tem a sua disposição um antendente especializado para prontamente tirar suas dúvidas.</p>  
            <br /><br /><br /><br />
        </Row>  

        <Row className="justify-content-center">
            <Image
            src="/img/Switch_Azul_Vermelho.jpg"
            alt="Produtos"
            width={150}
            height={150}
            />

            <Image
            src="/img/Organizador.jpg"
            alt="Produtos"
            width={150}
            height={150}
            />

            <Image
            src="/img/Pelicula.jpg"
            alt="Produtos"
            width={150}
            height={150}
            />


            <Image
            src="/img/Charging_Dock.jpg"
            alt="Produtos"
            width={150}
            height={150}
            />  
        </Row> 



        </Container>

        
      
    )
}

export default Principal;



