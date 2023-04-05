import '../../global_styles.css';
import './styles.css';

import cdb04 from '../../images/cdb_04.jpg';
import { Numbering } from '../Numbering';

export const Page08 = () => {
  return(
    <div className='Page Page__Mobile Page__Container Page__Margins'>
      <div className='Page08__Container'>
        <div className='Page__Text Page08__Text--Margins'>

          <i className='Page__Text'>Todas as Marias da Paz, a minha vó, a Vó Sônia e a todas as boleiras e boleiros dignos, a lição que fica é que que vale a pena lutar, a sentir orgulho das origens e que fazer bolo é um gesto de amor porque é simples ser feliz.</i><br/><br/>
          <i className='Page__Text Page08__Text--Italic'>-Murilo Bonucci</i>
        </div>
        <div className='.Page08__Img__Container'>
          <img className='Page08__Img' src={cdb04} alt="" />
        </div>
      </div>
      <div className='Pagination__Container'>
        <Numbering num={8} />
      </div>
    </div>
  );
}