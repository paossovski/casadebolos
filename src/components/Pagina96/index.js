import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina96 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-96'>
        <p className='Texto T-96'>
          <span className='C-96'>Tem Bolo Diet? Como é feito?</span><br/><br/>
          Temos sim, em quatro sabores: Laranja, Limão, Maçã e Maracujá, todos com farinha integral e adoçados com Sacarina e Ciclamato de Sódio - rendem em média de 14 a 16 fatias.
        </p><br/><br/>
        <p className='Texto T-96'>
          <span className='C-96'>Como é o Bolo Funcional?</span><br/><br/>
          Segmento mais saudável, produtos que auxiliam o organismo a trabalhar. Usamos ingredientes como     farinha de arroz, aveia, açúcar demerara e óleo de coco. Opções mais leves, e são bem saborosas, nem parece fit. E temos em três sabores: Cacau (tem gotas de cacau 70% distribuída pela massa), Cenoura (massa com sabor tradicional) ou Milho (feito com o próprio milho). <b>Todos sem lactose.</b> Sem glúten Cenoura e o Milho - feitos com farinha de arroz. O cacau é produzido com farinha de aveia.
        </p><br/><br/>
        <p className='Texto T-96'>
          ***Não indicamos para alergias graves, são produzidos na mesma cozinha que os demais sabores e tem contato.
        </p><br/>
        <p className='Texto T-96'>
          <span className='C-96'>Tem sem Glúten?</span><br/><br/>
          Temos sim, nas seguintes opções: Milho (Bem cremoso), Milho com Requeijão (catupiry), Queijo (salgado), Aipim (feito com o próprio aipim, produzido toda quinta-feira) ou Queijadinha (estilo  de sobremesa, base de leite condensado e coco). E tem opções geladas (sobremesas): Tapioca Gelada, Brigadeirão, Pudim e Panna Cotta que você escolhe a calda – morango, frutas amarelas ou manga.
        </p><br/><br/>
        <p className='Texto T-96'>
          ***Não indicamos para alergias graves, são produzidos na mesma cozinha que os demais sabores e tem contato.
        </p><br/>
        <p className='Texto T-96'>
          <span className='C-96'>Tem sem Lactose?</span><br/><br/>
          Temos sim, nas seguintes opções: Banana com Canela, Maçã com Castanha, Maçã, Cenoura, Fofinho de Chocolate, Fofinho de Fubá com Laranja, Crocante de Fubá com Laranja, Natal (Sazonal), Tangerina (Sazonal), e os funcionais Cenoura, Cacau e Milho.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={96} />
      </div>
    </div>
  );
}