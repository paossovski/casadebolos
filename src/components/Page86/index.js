import '../../global_styles.css';
import './styles.css';

import cdb85 from '../../images/cdb_85.jpg';

import { Numbering } from '../Numbering';

export const Page86 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page86__Container'>
        <img className='Page86__Img' src={cdb85} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={86} />
      </div>
    </div>
  );
}