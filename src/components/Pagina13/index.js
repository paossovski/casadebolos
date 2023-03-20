import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina13 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='P13 Texto'>
        <h1 className='P13T'>INAUGURAÇÕES E ENDEREÇOS</h1><br/><br/>
        <p>
          ⮚ &nbsp; <b>07/07/2016 | CENTRO – </b><i>Florianópolis/SC</i> – Rua Conselheiro Mafra, 624
        </p><br/><br/>
        <p>
          ⮚	<b>29/03/2017 | ESTREITO – </b><i>Florianópolis/SC</i> – Rua Gen. Liberato Bitencourt, 1777
        </p><br/><br/>
        <p>
          ⮚	&nbsp; <b>15/05/2018 | CENTRO 2 – </b><i>Florianópolis/SC</i> – Rua Anita Garibaldi, 128 Centro
        </p><br/><br/>
        <p>
          ⮚	&nbsp; <b>15/05/2019 | KOBRASOL – </b><i>São José/SC</i> – Rua Adhemar da Silva, 711 loja 01
        </p><br/><br/>
        <p>
          ⮚	&nbsp; <b>02/07/2021 | MAURO RAMOS – </b><i>Florianópolis/SC</i> – Avenida Mauro Ramos, 1225 Centro (Loja inicialmente em Palhoça, mudou para Mauro Ramos). 
        </p><br/><br/>
        <p>
          ⮚	&nbsp; <b>02/12/2020 | CURITIBA/PR – </b><i>Centro</i> – Rua Cândido Lopes, 223 – Loja 8 – Centro
        </p><br/><br/>
        <p>
          ⮚	&nbsp; <b>12/07/2022 | CURITIBA/PR – </b><i>Novo Mundo</i> – Rua São Judas Tadeu, 22 – Loja 11 esquina com Avenida Brasilia, 6518 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={13} />
      </div>
    </div>
  );
}