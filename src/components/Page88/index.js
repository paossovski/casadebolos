import '../../global_styles.css';
import './styles.css';

import cdb90 from '../../images/cdb_90.jpg';

import { Numbering } from '../Numbering';

export const Page88 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page88__Container'>
        <img className='Page88__Img' src={cdb90} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={88} />
      </div>
    </div>
  );
}