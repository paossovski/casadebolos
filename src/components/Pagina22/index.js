import '../../global_styles.css';
import './styles.css';

import Bolos11 from '../../images/bolos_11.jpg';
import Bolos12 from '../../images/bolos_12.jpg';
import { Numeracao } from '../Numeracao';

export const Pagina22 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div>
        <div className='Container-P22'>
          <h1 className='P22-Texto'>NOSSOS TRABALHOS E AÇÕES SOCIAIS</h1><br/> <br/>
          <p className='Texto P22'>
            Temos como segmento entregar-se; demonstrar dedicação a uma causa ou pessoa; doar-se à família. E nessa caminhada contamos com doações dos nossos queridos clientes. Ações simplesmente do coração que são feitas com muito amor e carinho! Nossos trabalhos sociais:
          </p><br/>
          <p className='Texto P22'>
            ●	&nbsp; Doação a Passarela da Cidadania;<br/>
            ●	&nbsp; Igrejas Credenciadas;<br/>
            ●	&nbsp; Contribuições com descontos ou entregas sem custo;<br/>
            ●	CURITIBA – Ação de doações para organização CIAF que cuida de crianças no contraturno escolar e Núcleo de Pastores de Curitiba para encontros e ações sociais;<br/>
            ●	&nbsp; Participamos de uma campanha chamada Ação de Graças da Casa de Bolos (durante um período, cada venda era destinada $1,00 para a campanha), tinha como intuito arrecadar $10.000,00 a contemplação ocorreu por sorteio em nível nacional e uma das nossas instituições indicadas, foi a  ganhadora. <b className='P22B'>Segue fotos:</b>
          </p><br/><br/><br/>
        </div>
        <div className='Img-P22'>
          <img className='Img22' src={Bolos11} alt="" />
          <img className='Img22' src={Bolos12} alt="" />
        </div>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={22} />
      </div>
    </div>
  );
} 