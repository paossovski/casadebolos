import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';

export const Page20 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div>Mapa curitiba centro</div>
      <div className='Pagination__Container'>
        <Numbering num={20} />
      </div>
    </div>
  );
}