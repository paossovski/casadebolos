import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';

export const Page14 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div>Mapa conselheiro mafra</div>
      <div className='Pagination__Container'>
        <Numbering num={14} />
      </div>
    </div>
  );
}