import '../../global_styles.css';
import './styles.css';

import Bolos08 from '../../images/bolos_08.jpg';
import Bolos09 from '../../images/bolos_09.jpg';
import Bolos10 from '../../images/bolos_10.jpg';
import { Numeracao } from '../Numeracao'; 

export const Pagina12 = () => {
  return(
    <div className='Pagina Pagina-Conteiner Margens'>
      <div className='Container-P12'>
        <h1 className='Texto P12'>NOSSA PRIMEIRA LOJA</h1><br/><br/>
        <div className='Container-Img-12'>
          <div className='P12B'>
            <img className='Img-12' src={Bolos08} alt="" />
            <h4 className='P12-Legenda'>1960</h4>
          </div>
          <div className='P12B'>
            <img className='Img-12' src={Bolos09} alt="" />
            <h4 className='P12-Legenda'>2015</h4>
          </div>
        </div><br/><br/>
        <div className='Container-12C'>
          <img className='P12C' src={Bolos10} alt="" />
          <h4 className='P12-Legenda'>2020</h4>
        </div><br/><br/><br/><br/>
        <div className='P12-Rodape'>
          <i className='Texto'>
            “O famoso e conhecido como <b>"O MAIS ANTIGO DIÁRIO DE SANTA CATARINA"</b> jornal <b>O ESTADO</b> por alguns anos ficou localizado bem ali em nossa <b>PRIMEIRA LOJA</b> da Conselheiro Mafra, 624.
          </i>
        </div><br/><br/><br/><br/><br/>
        <div className='Paginacao-Container'>
          <Numeracao num={12} />
        </div>
      </div>
    </div>
  );
}