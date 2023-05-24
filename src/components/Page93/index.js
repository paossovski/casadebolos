import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page93 = () => {
  return(
    <div 
      id='Page93' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page93__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b className='Page93__Text--Border'>
            Quais tamanhos de bolos têm?
          </b><br/><br/>
          Esta é uma base, de quantidade de fatias médias, ex: largura de um dedo.  Já na descrição do Ifood está convencionado em fatias de 66 gramas cada. São fatias bem finas(mais finas que um dedo) pois está alinhado com a tabela nutricional. Bolos de balcão temos a partir do Mini - rende de 4 a 6 fatias; Bolos Baby rende em média 10 fatias; O tamanho padrão rende de 14 a 16 fatias. Brownie, Milho com Requeijão, Fubá Cremoso, Integral de Banana com Aveia e Cuca baby rende em média 10 fatias; Torta caramelizada, Cuca e Amizade (maior, tamanho padrão) rende de 18 a 20 fatias; Sobremesas geladas rendem de 14 a 16 fatias; Opções de Aniversário, todos com recheio e cobertura, rendem de 20 a 25 fatias. Disponibilizamos porções individuais, são as opções de bolos no pote. Prontinho para consumir, é com recheio e cobertura. Maravilhoso! E por fim, a opção Bolo no Pote Família, equivale a 5 potes pequenos e produzidos em 4 sabores, sendo eles: Brigadeiro, Maracujá com Chocolate, Leite Ninho ou Morango com Creme - Eles são ótimos para sobremesa.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page93__Text--Border'>
            Já vem com cobertura?
          </span><br/><br/>
          As coberturas são opcionais, você escolhe sua preferida e incluímos (acréscimo de valor) no seu pedido.   Fica uma delícia! Para o Mini ou o Baby temos cobertura de Chocolate ou Limão  Para o tamanho padrão tem Limão ou Chocolate  E pode acrescentar se desejar, essas também: Maracujá ou Chocolate sem lactose, Cobertura de Doce de Leite ou Goiabada Cremosa. Leite Ninho ou Vó Sônia (leite condensado e creme de leite) E Chocolate Funcional (Cacau puro com açúcar demerara)
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page93__Text--Border'>
            Como são as coberturas?
          </span><br/><br/>
          Cobertura de <i>Chocolate</i> é cremosa e saborosa. A base de leite e chocolate, consistência de um ganache; Cobertura de <i>Limão ou Maracujá</i> é com base ao leite condensado e a fruta, consistência de mousse; Cobertura de <i>Chocolate sem lactose</i> é com base Leite de Coco e chocolate – ótima consistência; Cobertura de Leite Ninho é extremamente cremosa, base de leite condensado, creme de leite e <i>Leite Ninho</i>; Cobertura de <i>Goiabada</i>, da própria fruta e extremamente cremosa; Cobertura de <i>Doce de Leite</i> é suave, cremosa e saborosa; Cobertura <i>Vó Sônia</i> é com base de creme de leite e leite condensado, sabor suave. Uma delícia!
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={93} />
        </div>
      </div>
    </div>
  );
} 