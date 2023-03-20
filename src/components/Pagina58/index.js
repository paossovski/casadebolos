import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina58 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-58'>
        <p className='Texto T-58'>
          <b>●	MAURO RAMOS</b><br/>
          Externo (para o cliente) – (48) 3091-5070 | (48) 99180-5070<br/> 
          Interno (comunicação entre lojas) – (48) 3209-0243<br/> E-mail: &nbsp;
          <a className='A-58' href='florianopolis@casadebolos.com.br'>
            florianopolis@casadebolos.com.br
          </a>
        </p><br/><br/>
        <p className='Texto C-58'>
          Vale ressaltar que temos na nossa linha telefônica uma Central de Atendimento, devemos estimular o cliente entrar em contato sempre por este canal (48) 3091-5070. Por mais que as outras linhas telefônicas sejam tratadas da mesma maneira, é importante ressaltar o telefone principal de contato. Na Central de Atendimento, cada loja possui seu ramal, ou seja, o cliente escuta mensagem grava e disca o número conforme a loja que deseja falar. Sendo eles:
        </p><br/><br/>
        <p className='Texto C-58'>
          <b>⮚&nbsp; CENTRAL DE ATENDIMENTO ILHA: 01</b><br/>
          <b>⮚&nbsp; CENTRAL DE ATENDIMENTO CONTINENTE: 02</b><br/>
          <b className='C-581'>⮚&nbsp; CONSELHEIRO MAFRA: 03</b><br/>
          <b className='C-582'>⮚&nbsp; ANITA GARIBALDI: 04</b><br/>
          <b className='C-583'>⮚&nbsp; MAURO RAMOS: 05</b><br/>
          <b className='C-584'>⮚&nbsp; ESTREITO: 06</b><br/>
          <b className='C-585'>⮚&nbsp; KOBRASOL: 07</b>
        </p><br/><br/>
        <p className='Texto C-58 C-586'>
          <b>●	CENTRO DE CURITIBA</b><br/>
          Externo (para o cliente) – (41) 3503-9650<br/> 
          Interno (comunicação entre lojas) – (41) 3503-9650 | (41) 98803-1002<br/> E-mail: &nbsp; 
          <a className='A-58' href='curitibacentro@casadebolos.com.br'>
            curitibacentro@casadebolos.com.br
          </a>
        </p><br/><br/>
        <p className='Texto C-58 C-586'>
          <b>●	NOVO MUNDO -  CURITIBA</b><br/>
          Externo (para o cliente) – (41) 3019-2223<br/>
          Interno (comunicação entre lojas) – (41) 3019-2223 | (41) 98803-1002<br/> E-mail: &nbsp; 
          <a className='A-58' href='novomundoexpress@casadebolos.com.br'>
            novomundoexpress@casadebolos.com.br
          </a>
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={58} />
      </div>
    </div>
  );
}