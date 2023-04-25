import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';

export const Page21 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div>Mapa curitiba novo mundo</div>
      <div className='Pagination__Container'>
        <Numbering num={21} />
      </div>
    </div>
  );
}