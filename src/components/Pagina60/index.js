import '../../global_styles.css';
import './styles.css';

import Bolos60 from '../../images/bolos_60.jpg';
import Bolos61 from '../../images/bolos_61.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina60 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-60'>
        <p className='Texto T-60'>
          <b>DICA PARA CORTAR A CENOURA:</b><br/>
          Ao cortar a cenoura para guardar no refrigerador, os cortes deverão ser feitos com no máximo um dedo de espessura por rodela, assim evitaremos a quebra constate dos liquidificadores: 
        </p>
      </div>
      <div className='Container-Img-60'>
        <div className='Container-Titulo-60'>
          <h3 className='Texto Img-60B'>COMO NÃO FAZER:</h3>
          <img className='Img-60' src={Bolos60} alt="" />
        </div>
        <div className='Container-Titulo-60'>
          <h3 className='Texto Img-60B'>COMO FAZER:</h3>
          <img className='Img-60' src={Bolos61} alt="" />
        </div>
      </div>
      <p className='Texto T-60'>
        <b className='C-60'>SÁBADO</b><br/>
        <b>O TEMPO DE VENDA É PEQUENO -</b> importante agilizar as montagens de bolos, e por isso chame alguém para lhe ajudar e cuidar do desenforme e a separação das encomendas, já cobrindo os bolos, e embalando e deixando-os na área de atendimento para agilizar a entrega.
      </p>
      <div className='Paginacao-Container'>
        <Numeracao num={60} />
      </div>
    </div>
  );
}