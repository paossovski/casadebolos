import React from 'react';

import '../../global_styles.css';
import './style.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page06 = () => {
  return(
    <div 
      id='Page06' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <p className='Page__Text Page__Line--Height'>
        Numa classificação de 1 a 100, estava lá na quinta posição, o hábito de “Produzir e consumir doces e bolos” e isso me despertou que ali poderíamos ter uma oportunidade. Pesquisei mais, fui atrás de redes que já trabalhavam com bolos, fiz cliente oculto nos departamentos da emissora de TV e rádio e jornal, comprei muito bolo e distribui por diversos locais para saber a reação das pessoas, até chegar no produto ideal (Casa de Bolos). Sem entender o que ainda estava por vir, fui atrás, busquei mais informações, me dediquei a guardar os recursos mínimos para abrir meu negócio de bolos, mas ainda assim, com o mercado superaquecido dos anos de 2013 e 2014, encontrar o local ideal era um desafio enorme. Foram 18 meses de pesquisa de local. Muita contagem de clientes passantes, muitos sonhos, até que um dia, meu “hobby” de fotografar casas antigas e estudar a história local me despertou para um local. Aquela casa de 1890, tombada pelo patrimônio histórico, linda, onde abrigou por décadas o primeiro jornal impresso de Santa Catarina, era o lugar ideal para abrir uma CASA DE BOLOS, que mais que produtos, precisava vender lembranças, cheiro de casa de vó, sabor de mãe e que fosse algo que tocasse as pessoas. <br/><br/>  

        Em 2016 foi o ano que abrimos a primeira unidade de Santa Catarina e a aceitação foi imediata, tudo aquilo que precisávamos aconteceu, o cheirinho de bolo buscava o cliente lá na rua. <br/><br/>

        Hoje somos em seis unidades, em expansão e, todas as lojas com o mesmo sentimento, de entregar boas lembranças, de suprir a necessidade de um bolo de verdade, com amor, carinho, mostrando para as pessoas que as coisas se tornam mais verdadeiras quando nos reunimos em torno de uma mesa com um bolo, com os que amamos por perto. 
        O bolo faz isso, ele une, ele alimenta a alma. <br/><br/>

        Boa parte de minha trajetória na área de comunicação foi trabalhando na Cidade de Curitiba, onde tenho grande apreço e gratidão e assim que surgiu a oportunidade de abrir uma filial, reuni todos os esforços de contatos, boas amizades e pessoas importantes que fizeram parte no tempo que vivi e morei lá, e abrimos uma unidade no centro da cidade, como forma de agradecimento gerando emprego e renda.
      </p>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={6} />
        </div>
      </div>
    </div>
  );
}