import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';

export const Page18 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div>Mapa mauro ramos</div>
      <div className='Pagination__Container'>
        <Numbering num={18} />
      </div>
    </div>
  );
}