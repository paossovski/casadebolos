import '../../global_styles.css';
import './styles.css';

import cdb120 from '../../images/cdb_120.png';
import cdb121 from '../../images/cdb_121.png';

import { Numbering } from '../Numbering';

export const Page125 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page125__Container'>
        <div className='Page125__Title__Container'>
          <h1 className='Page__Text Page125__Text--Font'>Fotos</h1>
        </div>
        <div className='Page125__Img__Container Page125__Img__Align--A'>
          <div>
            <img className='Page125__Img' src={cdb120} alt="" />
            <h2>
              Confraternização 2021	
            </h2>
          </div>
        </div>
        <div className='Page125__Img__Container Page125__Img__Align--B'>
          <div>
            <img className='Page125__Img' src={cdb121} alt="" />
            <h2>
              Equipe Curitiba
            </h2>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <Numbering num={125} />
      </div>
    </div>
  );
}