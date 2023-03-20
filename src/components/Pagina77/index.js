import '../../global_styles.css';
import './styles.css';

import Bolo75 from '../../images/bolos_75.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina77 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-77'>
        <p className='Texto T-77'>
          <b>●	AVALIAR NO GOOGLE:</b> Orientamos e fazemos bom grado que o funcionário avalie de forma positiva sua empresa/loja e todas as demais no google. É simples e é positivo para a empresa e para entendermos que o funcionário está bem em estar empregado na Casa de Bolos.
        </p><br/><br/>
        <p className='Texto T-77'>
          <b>●	AUXILIEM O ENGAJAMENTO NAS REDES SOCIAIS – <span className='P-77'>PÁGINA FACEBOOK E   INSTAGRAM</span> –</b> Curtam, comentem e se possível, compartilhem.
        </p><br/><br/>
        <p className='Texto T-77'>
          ●	Estimulem nossos clientes a marcar <b className='P-77'> @casadebolosfloripa</b> nas redes sociais. Disponibilizamos de bilhetinhos para as vendas de balcão. Cliente comprou um bolinho, atendente deve colar o recadinho colado (nele consta uma frase fofinha e nosso instagram).
        </p><br/><br/>
        <img className='Img-77' src={Bolo75} alt="" /><br/><br/><br/>
        <p className='Texto T-77'>
          ●	Para a loja de Curitiba vale o mesmo processo de estimular clientes a marcar <b className='P-77'>@casadeboloscuritibaoficial</b> nas redes sociais. Disponibilizam também dos bilhetinhos para vendas de balcão. Cliente comprou bolinho, atendente cola o recadinho.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={77} />
      </div>
    </div>
  );
}