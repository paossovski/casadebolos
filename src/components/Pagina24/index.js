import '../../global_styles.css';
import './styles.css';

import Bolos14 from '../../images/bolos_14.jpg';
import Bolos15 from '../../images/bolos_15.jpg';
import Bolos16 from '../../images/bolos_16.jpg';
import Bolos17 from '../../images/bolos_17.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina24 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-24'>
        <h1 className='Texto Texto24'>CURIOSIDADES CASA DE BOLOS</h1><br/><br/>
        <div className='P24-A'>
          <img className='Bolos14' src={Bolos14} alt="" />
          <p className='Texto P24'>
            Você sabia que somos uma empresa com compromisso de até 2025 usar exclusivamente ovos sem ter galinhas confinadas. É possível fazer a diferença mesmo com gestos simples, como assumir uma postura de consumo mais responsável.
          </p>
        </div><br/><br/>
        <div className='P24-A'>
          <img className='Bolos14' src={Bolos15} alt="" />
          <p className='Texto P24'>
            Adotamos atitudes que são favoráveis ao meio ambiente. E assim temos como opção a Bolobag ou Sacola Ecológica. Embalagem mais durável, prática e econômica, que pode ser utilizada nos mais variados locais.
          </p>
        </div><br/><br/>
        <div className='P24-A'>
          <img className='Bolos14' src={Bolos16} alt="" />
          <div className='P24-D'>
          <p className='Texto P24-F'>
            O descarte incorreto acaba ocasionando em contaminação de outros resíduos, podendo impossibilitar mecanicamente a triagem.
          </p>
          <div className='P24-E'>
            <p className='Texto Texto-24'>
              Pode tirar o valor dos materiais ou direcionar os resíduos para o lugar errado.<br/><br/>
              O que podemos fazer para resolver isso é muito simples.
            </p>
            <img className='P24-C' src={Bolos17} alt="" />
          </div>
          </div>
        </div>
        <div className='P24-A'>
          <p className='Texto P24-B'>
            Só precisamos destinar os materiais corretamente no dia correto e vocês têm todas essas informações no aplicativo Lixo Certo. São mais de 300 pontos de coleta cadastrados por Florianópolis-SC, além da coleta seletiva que você pode consultar no aplicativo lixo certo. 
          </p>
        </div>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={24} />
      </div>
    </div>
  );
}

