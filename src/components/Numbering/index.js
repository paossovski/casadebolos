import './styles.css';
import '../../global_styles.css';

export const Numbering = ({num}) => {
  return(
    <div className='Pagination__Container PC--Size'>
      <div className='Pagination__Number'>
        {num}
      </div>
    </div>
  );
}