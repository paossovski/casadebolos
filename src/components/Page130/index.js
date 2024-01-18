import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page130 = () => {
  return(
    <div 
      id='Page130' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page130__Container'>
        <div className='Page130__Content__Container'>
          <p className='Page__Text Page__Line--Height'>
            Chegando aqui, muitas vagas abertas, porém uma dificuldade imensa de ser contratada, após quatro meses parada dentro de casa, depois de muitas entrevistas e NÃOS recebidos, onde eu já estava quase me arrependendo da minha decisão. De repente em um sábado abro o LinKedIn pra me candidatar em mais vagas, me aparece a vaga para Supervisora na Casa de Bolo, pensei, não custa tentar! Em seguida fui selecionada para uma entrevista, onde tive o primeiro contato do que era a Casa de Bolos e cá estou. A cada dia que passa, aprendo um pouco mais que ontem, conheci pessoas, histórias e culturas diferente da minha, sou grata por toda oportunidade de crescimento que venho tendo nessa empresa. Me sinto realizada de ensinar o que eu sei para as pessooas com quem trabalho, pra mim é gratificante, agregar meus princípios, valores e aprendizado. E sobre a nossa decisão de morar na famosa Ilha da Magia: Pois bem, arriscamos, não foi um começo fácil, mas seguramos firmes um na mão do outro e estamos completando em fevereiro de 2023, dois anos de moradia nesse lugar maravilhoso. Mas não vamos parar por aqui, temos muitas metas e obejtivos pela frente, pois camarão que dorme na areia a onda leva! Temos muito para aprender. Eu espero que nessa caminhada ainda consiga carregar mais pessoas comigo, para que lá na frente vocês tenham muitas histórias pra contar. Obrigada por me acompanharem até aqui!!!    
          </p>
       </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={130} />
        </div>
      </div>
    </div>
  );
}