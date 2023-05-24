import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page109 = () => {
  return(
    <div 
      id='Page109' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page109__Container'>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page109__Text--Border'>O que fazem com os bolos no final do dia?</span><br/><br/>
          Temos parceria com hotel, no fechamento passam aqui, pegam e servem no café. Bolos são fresquinhos, tem prazo de consumo de 24h, eles foram feitos agora final de tarde.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page109__Text--Border Page109__Text--Background'>
            Reclamação compra de cliente na loja física. Como agir?
          </span><br/><br/>Cliente entrou em contato por redes sociais ou presencial na loja constando erro de produção, bolo fora do padrão ou algum defeito (como data errada de produção anotada, cerda do pincel de desenforme... tudo o que não seja ‘normal’). Primeiramente, pedir perdão pelo ocorrido. Avisar ao cliente que avaliamos o produto no ato da troca mesmo, constatado o erro, imediatamente explique o ocorrido que levou a nossa falha. Faça a troca do produto, caso o cliente queira outro sabor, sem problemas, de. E em último caso, se houver resistência em troca, devolva o dinheiro. <b>Anote o nome do cliente, telefone e o bolo em questão
          </b> e passe para a Central de Atendimento cadastrar no sistema. 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Obs: anotar na planilha o bolo que foi trocado, como PERDA. E avisar a supervisão de imediato. Central de atendimento, taguear e cadastrar cliente como “problema” para que tenhamos cuidado extremo ao pegar novos pedidos desse cliente.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={109} />
        </div>
      </div>
    </div>
  );
}