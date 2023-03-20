import '../../global_styles.css';
import './styles.css';

import Bolos47 from '../../images/bolos_47.jpg';
import Bolos48 from '../../images/bolos_48.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina49 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-49'>
        <p className='Texto T-49'>CARTÃO FIDELIDADE FLORIPA</p>
        <img className='Img-49' src={Bolos47} alt="" /><br/><br/>
        <p className='Texto T-49'>CARTÃO FIDELIDADE CURITIBA</p>
        <img className='Img-49' src={Bolos48} alt="" /><br/><br/>
        <p className='Texto P-49'>
          <b>Fidelidade tem que preencher completo o -  CADASTRO FIDELIDADE. 
          </b> Para o cliente retirar a cortesia, é necessário preencher o cadastro com <b>todos os dados</b>, tendo o máximo possível de informações. Principalmente, com a data de aniversário. São comuns cadastros incompletos, isso prejudica complementar o banco de informações de clientes. 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={49} />
      </div>
    </div>
  );
}