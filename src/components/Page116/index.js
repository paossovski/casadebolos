import '../../global_styles.css';
import './styles.css';

import cdb105 from '../../images/cdb_105.png';

import { Numbering } from '../Numbering';

export const Page116 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page116__Container'>
        <img className='Page116__Img' src={cdb105} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={116} />
      </div>
    </div>
  );
}