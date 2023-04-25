import '../../global_styles.css';
import './styles.css';

import cdb18 from '../../images/cdb_18.jpg';

import { Numbering } from '../Numbering';

export const Page25 = () => {
  return(
    <div className='Page Page__Mobile Page__Container Page__Margins'>
      <div className='Page__Book__Container'>
        <h1 className='Page__Text Page25__Title'>
          VÓ SONIA TE DARÁ DICAS VALIOSAS: LEIA A HISTÓRIA
        </h1><br/>
        <img className='Page__Book__Img' src={cdb18} alt="" />
      </div><br/><br/>
      <div className='Pagination__Container'>
        <Numbering num={25} />
      </div>
    </div>
  );
}