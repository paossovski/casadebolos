import '../../global_styles.css';
import './styles.css';

import Bolos34 from '../../images/bolos_34.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina41 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-41'>
        <p className='Texto T41'>
          <b>PLAQUINHAS DE IDENTIFICAÇÃO NO BALCÃO OBRIGATÓRIAS:</b> As lojas do Centro (1 e 2)  de Florianópolis   pela rotatividade em vendas não são obrigadas a utilizar dentro do balcão placas de identificação de bolos, exceto bolos diet, e funcionais. Nas demais lojas o uso de placas em todos os bolos é OBRIGATÓRIA. Confira as plaquinhas de sua loja, separe, limpe e organize e use. Não espere ser cobrado sobre o uso.
        </p><br/><br/>
        <img src={Bolos34} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={41} />
      </div>
    </div>
  );
}