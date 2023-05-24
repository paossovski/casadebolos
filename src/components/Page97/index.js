import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page97 = () => {
  return(
    <div 
      id='Page97' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page97__Container'>
        <p className='Page__Text Page__Line--Height'>
          ***Não indicamos para alergias graves, são produzidos na mesma cozinha que os demais sabores e tem contato.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page97__Text--Border'>
            Tem Brownie?
          </span><br/><br/>
          Temos sim, é o verdadeiro brownie, Maravilhoso! Temos COM e SEM nozes - rende em torno de 10 fatias. É especial, com produtos selecionados, o verdadeiro brownie.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page97__Text--Border'>
            Tem sobremesa?
          </span><br/><br/>
          Temos sim, várias opções: Bolo no Pote Família (com recheio e cobertura), Tapioca Gelada (Tapioca hidratada no leite de coco), Panna Cotta (sobremesa italiana, lembra um manjar à base de extrato de baunilha) - pode escolher entre as três caldas: morango, manga ou (frutas amarelas), Pudim de  Leite Condensado ou de Chocolate (Brigadeirão).
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page97__Text--Border'>
            Qual a diferença entre o Bolo Pudim, Pudim e o Brigadeirão?
          </span><br/><br/>Bolo <i>Pudim</i> é com a base de massa de bolo e em cima pudim de leite condensado. Uma boa opção para sobremesa e geladinho! <i>Pudim</i> é um Pudim tradicional de leite condensado e é muito saboroso. <i>Brigadeirão</i> é um pudim de chocolate cremoso, com granulado em cima.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page97__Text--Border'>
            Qual a diferença entre o Fubá, Fubá com Goiabada, Milho, Milho com Requeijão, Aipim, Fubá Cremoso, Mesclado e o Formigueiro?
          </span><br/><br/>O bolo de <i>Fubá</i> é tradicional, leve, mais sequinho e fofinho, muito saboroso. Nosso bolo de <i>Fubá com Goiabada</i> - produzido diariamente - é uma combinação entre a massa tradicional de fubá, mais sequinho, fofinha e pedacinhos de goiabada distribuídos. O bolo de <i>Milho</i> – produzido diariamente - é sensacional, muito cremoso e sabor tradicional de milho verde, é certeiro  para o cafezinho! O bolo de Milho com Catupiry – massa de milho verde, mais cremoso devido ao catupiry, com sabor tradicional do milho, é agridoce! Nosso bolo de <i>Aipim</i> – produzido toda quinta-feira – feito do próprio aipim, ralado e com queijo na massa, extremamente saboroso. 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={97} />
        </div>
      </div>
    </div>
  );
}