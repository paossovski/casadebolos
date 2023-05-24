import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page96 = () => {
  return(
    <div 
      id='Page96' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page96__Container'>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page96__Text--Border'>
            Tem Bolo Diet? Como é feito?
          </span><br/><br/>
          Temos sim, em quatro sabores: Laranja, Limão, Maçã e Maracujá, todos com farinha integral e adoçados com Sacarina e Ciclamato de Sódio - rendem em média de 14 a 16 fatias.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page96__Text--Border'>
            Como é o Bolo Funcional?
          </span><br/><br/>
          Segmento mais saudável, produtos que auxiliam o organismo a trabalhar. Usamos ingredientes como     farinha de arroz, aveia, açúcar demerara e óleo de coco. Opções mais leves, e são bem saborosas, nem parece fit. E temos em três sabores: Cacau (tem gotas de cacau 70% distribuída pela massa), Cenoura (massa com sabor tradicional) ou Milho (feito com o próprio milho). <b>Todos sem lactose.</b> Sem glúten Cenoura e o Milho - feitos com farinha de arroz. O cacau é produzido com farinha de aveia.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          ***Não indicamos para alergias graves, são produzidos na mesma cozinha que os demais sabores e tem contato.
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page96__Text--Border'>
            Tem sem Glúten?
          </span><br/><br/>
          Temos sim, nas seguintes opções: Milho (Bem cremoso), Milho com Requeijão (catupiry), Queijo (salgado), Aipim (feito com o próprio aipim, produzido toda quinta-feira) ou Queijadinha (estilo  de sobremesa, base de leite condensado e coco). E tem opções geladas (sobremesas): Tapioca Gelada, Brigadeirão, Pudim e Panna Cotta que você escolhe a calda – morango, frutas amarelas ou manga.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          ***Não indicamos para alergias graves, são produzidos na mesma cozinha que os demais sabores e tem contato.
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page96__Text--Border'>
            Tem sem Lactose?
          </span><br/><br/>
          Temos sim, nas seguintes opções: Banana com Canela, Maçã com Castanha, Maçã, Cenoura, Fofinho de Chocolate, Fofinho de Fubá com Laranja, Crocante de Fubá com Laranja, Natal (Sazonal), Tangerina (Sazonal), e os funcionais Cenoura, Cacau e Milho.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={96} />
        </div>
      </div>
    </div>
  );
}