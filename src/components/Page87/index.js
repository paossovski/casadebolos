import '../../global_styles.css';
import './styles.css';

import cdb86 from '../../images/cdb_86.jpg';
import cdb87 from '../../images/cdb_87.jpg';
import cdb88 from '../../images/cdb_88.jpg';
import cdb89 from '../../images/cdb_89.jpg';

import { Numbering } from '../Numbering';

export const Page87 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page87__Container'>
        <div className='Page87__Img__Container'>
          <img className='Page87__Img' src={cdb86} alt="" />
          <img className='Page87__Img' src={cdb87} alt="" />
        </div><br/><br/>
        <div className='Page87__Img__Container'>
          <img className='Page87__Img' src={cdb88} alt="" />
          <img className='Page87__Img' src={cdb89} alt="" />
        </div>        
      </div>
      <div className='Pagination__Container'>
        <Numbering num={87} />
      </div>
    </div>
  );
}