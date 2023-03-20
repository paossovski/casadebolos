import '../../global_styles.css';
import './styles.css';

import Bolo65 from '../../images/bolos_65.jpg';
import Bolo66 from '../../images/bolos_66.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina64 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-64'>
        <img className='Img-64' src={Bolo65} alt="" /><br/><br/>
        <p className='Texto T-64'>
          <b>CONTROLE DE CHAVES:</b> Alguns colaboradores se encontram na pose das chaves da loja, já temos um levantamento de que possui, caso venham a perder, será responsável pelo pagamento destas chaves, por isso, cuidem e zelem por elas.
        </p><br/><br/>
        <p className='Texto T-64'>
          <b>RECICLE O LIXO:</b> Utilize as lixeiras corretas. Vamos reciclar! É fácil, respeite! Tem plaquinha de reciclado, recicle. O lixo reciclado é recolhido, destinado ao depósito e comercializado. Todo dinheiro arrecadado em prol da festa do final de ano dos colaboradores.
        </p>
        <img className='Img-64' src={Bolo66} alt="" />
        <p className='Texto T-64'>
          <b>ECONOMIZE SACOS PLÁSTICOS EMBALAGENS:</b> Os sacos plásticos que vem com as embalagens (32, 50 e 56) podem ser utilizados nas lixeiras, por favor utilize.
        </p><br/><br/>
        <p className='Texto T-64'>
          <b>COLETA LIXO RECICLÁVEL:</b><br/> 
          •	Papelão em geral é coletado pela nossa equipe da logística, separe e será recolhido. 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={64} />
      </div>
    </div>
  );
}