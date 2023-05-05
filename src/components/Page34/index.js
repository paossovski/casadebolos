import '../../global_styles.css';
import './styles.css';

import cdb27 from '../../images/cdb_27.jpg';

import { Numbering } from '../Numbering';

export const Page34 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb27} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={34} />
      </div>
    </div>
  );
}