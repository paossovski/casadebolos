import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb03 from '../../images/cdb_03.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page05 = () => {
  return(
    <div 
      id='Page05' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <p className='Page05__Text Page__Text'>Nossa História</p>
      <div className='Page05__Container'>
        <div className='Page05__Img__Container'>
          <img className='Page05__Img' src={cdb03} alt="" />
        </div>
        <div>
        <p className='Page__Text Page__Line--Height Page05__Text--Margin'>
          Dizem que a fruta não cai muito longe do pé. Na casa da minha avó por observação eu aprendi a fazer bolo e a me interessar pela área de alimentação, foi ali com ela uma boleira como poucas, que eram feitos os melhores e mais bem decorados bolos para todas as festas de família. Os melhores bolos da minha vida sempre serão os dela. Era uma delícia ver, viver e sentir no ar a dedicação dela que logo às 5h da manhã preenchia a casa com o melhor cheiro de doce da vida. 
        </p></div>
      </div>
      <div className='Page__Text Page__Line--Height'>
        Também foi no momento mais difícil de nossas vidas em família que os bolos, que a lida na cozinha nos salvou de uma grave e longa crise financeira familiar, lá na década de 90. Mas eu fugi do ramo da alimentação quando descobri que poderia viver coisas novas e a vida se encheu de oportunidades nas áreas de eventos, marketing e a minha paixão pela comunicação me trouxe grande experiência. Foram mais de 15 anos longe de cozinhas como profissão e me entreguei ao mundo da comunicação, na TV, no rádio, na internet, nos bastidores e na frente das câmeras. Fiz carreira nas emissoras afiliadas à Rede Globo, isso me envolveu. Pude entender sobre pesquisa, informação de mercado e tendências. A pressão por empreender, atrelado a um jeito todo organizado de ser, me fez entender que este caminho estava se abrindo, e longe alguns anos de minha cidade, pois o mundo da comunicação me fez viajar por vários estados do Brasil e, eu precisava tomar o caminho de volta, a família chamava, e a saudades apertava a cada dia. <br/><br/>

        O que fazer? Como juntar minhas paixões pela comunicação e pela lida na cozinha, com algo que tivesse propósito e trouxesse o sustento para casa? Precisava ser algo com princípios e valores muito concretos e verdadeiros. Minha vida sempre foi pautada por isso. <br/><br/>

        Cerca de 2 anos antes de abrir a minha primeira Casa de Bolos, em 2016, trabalhando em uma pesquisa sobre determinados hábitos de consumo em minha cidade, Florianópolis, me deparei com uma informação que me chamou a atenção. Minha visão de comunicação é quem me despertou 
        para isso. 
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={5} />
        </div>
      </div>
    </div>
  );
}