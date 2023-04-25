import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';

export const Page17 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div>Mapa kobrasol</div>
      <div className='Pagination__Container'>
        <Numbering num={17} />
      </div>
    </div>
  );
}