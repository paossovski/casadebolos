import '../../global_styles.css';
import './styles.css';

import cdb107 from '../../images/cdb_107.png';

import { Numbering } from '../Numbering';

export const Page118 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page118__Container'>
        <img className='Page118__Img' src={cdb107} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={118} />
      </div>
    </div>
  );
}