import '../../global_styles.css';
import './styles.css';

import Bolos33 from '../../images/bolos_33.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina40 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-40'>
        <p className='Texto T40'>
          <b>GELADEIRA DE POTES:</b> Observar e organizar sempre a geladeira de potes. Não esqueça de ligar a luz da geladeira. Não deixe a porta molhada, suada, potes desorganizados ou sujos. - sempre colocar a data de validade e reorganizar isso diariamente, conferindo a qualidade e a aparência dos potes. Bolos no pote com data mais avançada seguir a regra de descontos (sempre com autorização da supervisão).
        </p><br/>
        <img className='Img40' src={Bolos33} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={40} />
      </div>
    </div>
  );
}