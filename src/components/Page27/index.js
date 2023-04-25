import '../../global_styles.css';
import './styles.css';

import cdb20 from '../../images/cdb_20.jpg';

import { Numbering } from '../Numbering';

export const Page27 = () => {
  return(
    <div className='Page Page__Container Page__Mobile Page__Margins'>
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb20} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={27} />
      </div>
    </div>
  );
}