import '../../global_styles.css';
import './styles.css';

import Logotipo from '../../images/bolos_02.png';
import { Numeracao } from '../Numeracao';

export const Pagina04 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-Img'>
        <img className='Logo-Pagina04' src={Logotipo} alt="" />
      </div><br/><br/>
      <div className='Container-Texto'>
        <div className='Texto'>
          <p className='Texto Titulo-Pagina04'>MISSÃO, VISÃO E VALORES</p>
          <br/><br/><br/>
          <p className='Texto Titulo-Pagina04'>MISSÃO</p><br/><br/>
          <p className='Texto Titulo-Align'>
            "Oferecer às pessoas produtos de qualidade, que garantam sua satisfação, agregando sabor e valor às suas vidas, trazendo à lembrança, as coisas que são realmente importantes."
          </p><br/><br/>
          <p className='Texto Titulo-Pagina04'>VISÃO</p><br/><br/>
          <p className='Texto Titulo-Align'>
            Ser referência em bolos caseiros. Ser exemplo em condutas e processos. Ser inspiração para o resgate de valores, construindo pontes entre as pessoas.
          </p><br/><br/>
          <p className='Texto Titulo-Pagina04'>VALORES</p><br/><br/>
          <p className='Texto Titulo-Align'>
            <i className='Texto Titulo-Align'>SIMPLICIDADE:</i> optar pelo simples é escolher um caminho para a felicidade; <br/>
            <i className='Texto Titulo-Align'>FAMÍLIA:</i> a razão do nosso sucesso;<br/>
            <i className='Texto Titulo-Align'>HUMILDADE:</i> crescer sem perder a essência.
          </p>
        </div>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={4} />
      </div>
    </div>
  );
}