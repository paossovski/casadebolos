import '../../global_styles.css';
import './styles.css';

import cdb52 from '../../images/cdb_52.jpg';
import cdb53 from '../../images/cdb_53.jpg';

import { Numbering } from '../Numbering';

export const Page51 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page51__Container'>
        <img className='Page51__Img--A' src={cdb52} alt="" /><br/><br/>
        <img className='Page51__Img--B' src={cdb53} alt="" /><br/><br/>
        <p className='Page__Text Page51__Text--Align'>
          <b>INFORMAÇÕES COMPLEMENTARES</b></p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>PROMOÇÕES:</b> Lojas só farão promoções apenas com autorização da Supervisão. Tem bolos ou potes com urgência em vender? Passem com antecedência e aguardem a autorização. Em principio nunca podemos fazer promoção de nada. 
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>DESCONTO 10% ANIVERSARIANTE DO DIA:</b> Essa promoção não é mais válida, então não oferençam mais essa promoção. Suspendemos ela, devido a baixa procura e falta de dados, durante o uso da promoção!
        </p>
      </div>
      <div className='Pagination__Container'>
        <Numbering num={51} />
      </div>
    </div>
  );
}