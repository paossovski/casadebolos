import '../../global_styles.css';
import './styles.css';

import cdb30 from '../../images/cdb_30.jpg';
import cdb31 from '../../images/cdb_31.jpg';

import { Numbering } from '../Numbering';

export const Page37 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page37__Container'>
        <h1 className='Page__Text Page37__Text'>NOSSAS BASES</h1><br/><br/>
        <img className='Page37__Img' src={cdb30} alt="" /><br/><br/>
        <img className='Page37__Img' src={cdb31} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={37} />
      </div>
    </div>
  );
}