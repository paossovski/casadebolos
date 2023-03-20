import '../../global_styles.css';
import './styles.css';

import Bolos52 from '../../images/bolos_52.jpg';
import Bolos53 from '../../images/bolos_53.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina51 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-51'>
        <img className='Img-51' src={Bolos52} alt="" /><br/><br/>
        <img className='Img-51B' src={Bolos53} alt="" /><br/><br/>
        <p className='Texto T-51'><b>INFORMAÇÕES COMPLEMENTARES</b></p><br/>
        <p className='Texto P-51'>
          <b>PROMOÇÕES:</b> Lojas só farão promoções apenas com autorização da Supervisão. Tem bolos ou potes com urgência em vender? Passem com antecedência e aguardem a autorização. Em principio nunca podemos fazer promoção de nada. 
        </p><br/>
        <p className='Texto P-51'>
          <b>DESCONTO 10% ANIVERSARIANTE DO DIA:</b> Essa promoção não é mais válida, então não oferençam mais essa promoção. Suspendemos ela, devido a baixa procura e falta de dados, durante o uso da promoção!
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={51} />
      </div>
    </div>
  );
}