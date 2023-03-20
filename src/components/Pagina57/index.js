import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina57 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-57'>
        <p className='Texto'>
          pedido no local desejado tomando todos os cuidados e seguindo todas as normas da vigilância sanitária.<br/><br/><br/><br/>
        </p><br/><br/>
        <p className='Texto T-57'>
          <b className='T-57B'>COMUNICAÇÃO ENTRE LOJAS E COM CLIENTE</b>
        </p><br/><br/><br/>
        <p className='Texto P-57E'>
          <b>●	CENTRAL DE ATENDIMENTO</b><br/>
          Externo (para o cliente) – (48) 3091-5070 | (48) 99180-5070<br/>
          Interno (comunicação entre lojas) – (48) 3771- 5287 | (48) 3209 - 0243 <br/> E-mail: &nbsp; 
          <a 
            href='continenteflorianopolis@casadebolos.com.br'
            className='Ancora-57'
          >
            continenteflorianopolis@casadebolos.com.br
          </a>
        </p><br/>
        <p className='Texto P-57'>
          <b>●	CONSELHEIRO MAFRA</b><br/>
          Externo (para o cliente) – (48) 3209-904 | (48) 99180-5070<br/>
          Interno (comunicação entre lojas) – (48) 3771-3974 | (48) 3771-3974<br/> E-mail: &nbsp; 
          <a 
            href='centroflorianopolis@casadebolos.com.br'
            className='Ancora-57'
          >
            centroflorianopolis@casadebolos.com.br
          </a>
        </p><br/>
        <p className='Texto P-57B'>
          <b>●	ANITA GARIBALDI</b><br/>
          Externo (para o cliente) – (48) 3039-1050 | (48) 99180-5070<br/>
          Interno (comunicação entre lojas) – (48) 3771-8931 | (48) 99179-1050<br/> E-mail: &nbsp; 
          <a 
            href='centroflorianopolis2@casadebolos.com.br'
            className='Ancora-57'
          >
            centroflorianopolis2@casadebolos.com.br
          </a>
        </p><br/>
        <p className='Texto P-57C'>
          <b>●	ESTREITO</b><br/>
          Externo (para o cliente) – (48) 3091-5070 | (48) 99180-5070<br/>
          Interno (comunicação entre lojas) – (48) 3771-5287 | (48) 3771-5287<br/> E-mail: &nbsp;
          <a 
            href='continenteflorianopolis@casadebolos.com.br'
            className='Ancora-57'
          >
            continenteflorianopolis@casadebolos.com.br
          </a>
        </p><br/>
        <p className='Texto P-57D'>
          <b>●	KOBRASOL</b><br/>
          Externo (para o cliente) – (48) 3015-7010 | (48) 99180-5070<br/>
          Interno (comunicação entre lojas) – (48) 3771-9637 | (48) 99147-2075<br/> E-mail: &nbsp;
          <a 
            href='kobrasol@casadebolos.com.br'
            className='Ancora-57'
          >
            kobrasol@casadebolos.com.br
          </a>
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={57} />
      </div>
    </div>
  );
}