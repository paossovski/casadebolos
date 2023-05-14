import '../../global_styles.css';
import './styles.css';

import cdb101 from '../../images/cdb_101.png';

import { Numbering } from '../Numbering';

export const Page112 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page112__Container'>
        <img className='Page112__Img' src={cdb101} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={112} />
      </div>
    </div>
  );
}