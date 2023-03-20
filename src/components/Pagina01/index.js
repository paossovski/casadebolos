import '../../global_styles.css'
import './styles.css';

import Logo from '../../images/bolos_01.png';

export const Pagina01 = () => {
  return(
    <div className='Pagina'>
      <div className='Pagina-Container'>
        <div className='Titulo-Container'>
          <h1 className='Titulo'>
            Manual de Condutas <br/> e Práticas
          </h1>
        </div>
        <div className='Logo-Container'>
          <img className='Logo' src={Logo} alt='' />
        </div>
      </div>
    </div>
  );
}