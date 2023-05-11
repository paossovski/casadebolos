import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';


export const Page110 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page110__Container'>

      </div>
      <div className='Pagination__Container'>
        <Numbering num={110} />
      </div>
    </div>
  );
}