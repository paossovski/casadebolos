import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page108 = () => {
  return(
    <div 
      id='Page108' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page108__Container'>
        <p className='Page__Text Page__Line--Height'>
          Olá tudo bem?  Primeiramente, nos perdoe pelo ocorrido. Não foi intencional e nem para lhe prejudicar. Todas nossas entregas são teceirizadas, pelo Ifood, vamos verificar o que houve e já te informo.  Sugestão cartão fidelidade que já existe no cardápio Recebemos seu feedback da troca de fidelidade, e na sugestão foi escrito uma opção que oferecemos no cardápio. Você pode encomendar, retirar no dia e horário de sua preferência, assim, produziremos especialmente para você provar e deliciar-se!
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Feedback cliente – troca de fidelidade<br/>
          Recebemos sua avaliação da troca do fidelidade e percebemos que um dos quesitos não teve a nota máxima, desejamos sua ajuda, como podemos melhorar? A visão do cliente é muito importante para aprimorarmos e melhorarmos nossa produção e atendimento.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Feedback cliente – troca de fidelidade<br/>
          Olá,<br/>
          Falamos em nome à Casa de Bolos,<br/>
          Recebemos sua avaliação da troca do cartão fidelidade e ficamos felizes por termos a sua visão da Casa de Bolos e percebemos que um dos quesitos não teve a nota máxima, no (_) , e desejamos sua ajuda, como podemos melhorar? Queremos lhe garantir sempre o melhor produto, atendimento e preço justo, tudo com muito carinho e cuidado. A visão do cliente é muito importante para aprimorarmos e melhorarmos nossa produção e atendimento. Ficamos agradecidos pela ajuda.
        </p><br/><br/>
        <p className='Page__Page__Line--Height'>
          <b className='Page108__Text__Border'>Sugestão fidelidade:</b>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Bom dia, tudo bem?<br/>
          Falamos da Casa de Bolos,<br/>
          Recebemos seu feedback da troca do cartão fidelidade e ficamos felizes com sua história de vários bolos com a gente, e na sugestão foi escrito uma opção que oferecemos no cardápio, que é o bolo (_) . Você pode encomendar, retirar no dia e horário de sua preferência e garantimos que é uma delícia, assim, produziremos especialmente para você provar e deliciar-se! E sempre nos mande sugestões e dicas para melhorarmos sempre.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={108} />
        </div>
      </div>
    </div>
  );
}