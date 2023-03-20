import '../../global_styles.css';
import './styles.css';

import Bolos37 from '../../images/bolos_37.jpg';
import Bolos38 from '../../images/bolos_38.jpg';
import Bolos39 from '../../images/bolos_39.jpg';
import Bolos40 from '../../images/bolos_40.jpg';
import Bolos41 from '../../images/bolos_41.jpg';
import Bolos42 from '../../images/bolos_42.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina44 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-44'>
        <p className='Texto T-44'>
          <b>VENDA DE VELAS, BOLOBAG, CAIXA PRESENTE E EMBALAGENS:</b> Estimular <b>SEMPRE</b> a venda de itens complementares, aumenta nosso ticket médio. Sempre que for vender, anotar na planilha de produção diária. Especificar o que foi vendido. E sempre que necessário, repor esses itens na área de atendimento.
        </p><br/><br/>
        <div className='Container-Img'>
          <img className='Bolos37' src={Bolos37} alt="" />
          <img className='Bolos38' src={Bolos38} alt="" />
          <img className='Bolos39' src={Bolos39} alt="" />
        </div><br/><br/>
        <div className='Container-Img2'>
          <img className='Bolos40' src={Bolos40} alt="" />
          <img className='Bolos41' src={Bolos41} alt="" />
          <img className='Bolos42' src={Bolos42} alt="" />
        </div>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={44} />
      </div>
    </div>
  );
}