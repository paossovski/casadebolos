import './styles.css';
import '../../global_styles.css';

export const Numeracao = ({num}) => {
  return(
    <div className='Container-Paginacao'>
      <div className='Paginacao'>
        {num}
      </div>
    </div>
  );
}