import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';

export const Page15 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div>Mapa Anita garibaldi</div>
      <div className='Pagination__Container'>
        <Numbering num={15} />
      </div>
    </div>
  );
}