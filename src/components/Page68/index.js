import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page68 = () => {
  return(
    <div 
      id='Page68' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page68__Container'>
        <p className='Page__Text'>
          <i className='Page68__Text--Background'>Ex: Casa de Bolos Conselheiro Mafra, bom dia!</i>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>SCRIPT ATENDIMENTO –</b> Disponibilizamos de um roteiro atendimento com o cliente por telefone. Saudação, encomendas, delivery telefone e endereços lojas.
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>ATENDIMENTO AO CLIENTE POR TELEFONE E PRECISA VERIFICAR SE TEM  
          EM OUTRA LOJA DISPONÍVEL –</b> Só um momento, vou conferir no sistema a disponibilidade do bolinho para você no sistema (assim, você confere na loja alocada se tem ou entra em contato com a unidade que precisa). Não passe ao cliente que vamos ligar, conferir nas câmeras ou dar uma olhadinha no balcão;
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>DELIVERY –</b> Responsável principal em fazer encomenda de pedido, separar bolos, emitir nota fiscal e despachar. E no final dia, fazer conferência das anotações da entregas  marcar na planilha de produção.
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>LIVRO DE OCORRÊNCIAS SUPERVISÃO:</b> Durante o dia-a-dia, acontecem diversas situações e procuramos registrar essas ocorrências, informações importantes na Central de Atendimento. Nosso livro de ocorrência é registrado em cada caso de problemas, boas práticas e situações importantes para o funcionamento da equipe. De tempos em tempos e após serem resolvidas estas situações são pontuadas para que com estes registros todos aprendam juntos e melhoremos cada vez mais e os resultados positivos irão para o grupo de boas práticas e poderão ser premiadas.
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>ORGANIZAÇÃO SETOR CENTRAL:</b> Manter organizado e limpo. Uma 1x por semana fazer limpeza geral da área e nunca consumir alimentos em cima da mesa de equipamentos de trabalho.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={68} />
        </div>
      </div>
    </div>
  );
}