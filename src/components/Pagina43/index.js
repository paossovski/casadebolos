import '../../global_styles.css';
import './styles.css';

import Bolos36 from '../../images/bolos_36.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina43 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-43'>
        <h1 className='Texto T43'>
          LAYOUT DE DISPONIBILIZAÇÃO DE BOLOS <br/> DENTRO DO BALCÃO
        </h1><br/><br/>
        <img className='Img-43' src={Bolos36} alt="" /><br/><br/><br/><br/>
        <p className='Texto T-43'>
          A partir do lançamento desta versão deste manual, o balcão será organizado de forma padronizada nas lojas. ou seja, independente da loja que o cliente for, encontrará os bolos no balcão com a mesma ‘carinha’. 
        </p><br/><br/>
        <p className='Texto T-43'>
          ⮚	O Kobrasol seguirá a mesma montagem, a única diferença é que os bolos com coberturas ficarão dentro do balcão 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={43} />
      </div>
    </div>
  );
}