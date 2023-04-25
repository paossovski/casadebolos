import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';

export const Page16 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div>Mapa estreito</div>
      <div className='Pagination__Container'>
        <Numbering num={16} />
      </div>
    </div>
  );
}