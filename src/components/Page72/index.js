import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb70 from '../../images/cdb_70.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page72 = () => {
  return(
    <div 
      id='Page72' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page72__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>GORDURA TRANS:</b> Nossos bolos não contêm gordura trans, na produção deles usamos produtos sem prejudicar a saúde. Produção de maneira mais natural possível. <b>PODE MENCIONAR AOS CLIENTES!</b>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>BOLOS FUNCIONAIS:</b> Temos a linha de Bolos Funcionais, eles são uma versão mais 'geração saúde'. <b>Glúten -</b> (Exceto o Cacau, que vai aveia na receita) e sem lactose - com ingredientes saudáveis. Indicados para pessoas que possuem intolerância ao trigo, leite e seus derivados com manteiga, margarina e etc. Falar que são saborosos e leves é ótimo pra quem opta por uma alimentação saudável. Priorizar SEMPRE a indicação do <b>CENOURA FUNCIONAL</b> (o mais rentável). Pode acrescentar que são feitos com farinha de arroz, açúcar demerara, óleo de coco - agrega maior credibilidade.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Sempre dê opções de escolha ao cliente.</b> Não tem o bolo desejado, indique sabores da mesma linha ou que seja parecido. Ou sugira ao cliente para fazer encomenda e retirar no dia seguinte, ou na data de preferência dele. <b>Mas, não perca a venda! O PODER DOS 3 NÃOS -</b> seus 3 não que espantam o cliente e ele nunca mais voltará.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          ⮚	Observe quantas vozes você fala NÃO para o cliente;<br/>          
          ⮚	Um cliente que recebe 3 NÃO, nunca mais volta;<br/>
          ⮚	EVITE, falar NÃO, dê sugestões de substituição aos pedidos;<br/>
          ⮚	Se precisar falar NÃO, explique o porquê.
        </p><br/><br/>
        <img className='Page72__Img' src={cdb70} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={72} />
        </div>
      </div>
    </div>
  );
}