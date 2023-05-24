import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page39 = () => {
  return(
    <div 
      id='Page39' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page39__Container'>
        <p className='Page__Text Page__Line--Height'>
          o caixa, faz as anotações, liga o som, as luzes, coloca os banners, verifica as lixeiras, limpa a calçada, abre bem as grades. Após a abertura da loja, a preocupação da pessoa responsável pelo atendimento é deixar o balcão organizado, reposto e com variedades, cuidar do caixa, realizar sangrias, anotar comandas, e no caso de ter que limpar a área de atendimento <b>TEM QUE CHAMAR</b> a pessoa responsavel pela limpeza, é esta pessoa que mantem a loja limpa ao lingo do dia, ou seja, não tenha medo de chamar. 
          Obs: Nunca limpar a loja na presença de clientes, espere ficar sem clientes e faça esta limpeza apenas com a loja vazia. Não deixe baldes, vassouras, e panos na área de atendimento e nem na cozinha, existe um local apropriado para isso. 
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>BOLO NO BALCÃO:</b> abra a loja pontualmente, colocando o maximo de bolos prontos até atingir pelo menos 15 bolos no balcão. (dentro e em cima – Bolos com coberturas/montados). Às quintas e sextas-feiras e vésperas  de feriados abrir com o balcão completo. 
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>MONTAGEM DE BOLOS:</b> Veja o anexo deste manual com imagens ilustrativas de como devem ser as aplicações das coberturas, e aparencia dos bolos. Não inventar montagem que não seja a padronizada da franquia. Para saber a quantidade exata de produtos na montagem, pegue o livro de montagem de bolos e siga a receita. Use sempre a balança pra garantir que os produtos estejam na medida correta, Nunca coloque no olho. <b><i>Obs: a regra da balança é válida para todos os funcionários, sem exceções!</i></b>
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>BALCÃO VAZIO JAMAIS!</b> Controle a quantidade de bolos seguindo a regra de abertura da loja e vá colocando aos poucos, variando com o que tiver e  as possíveis sobras. Se o bolo não é do dia e não está quente, tem aquela dica de se ferver meia panela de água e colocar ela dentro do balcão, fechar as portas e deixar o balcão suar, e depois colocar bolos lá dentro. Mantenhamos sempre do lado esquerdo do balcão e depois vá completando. (veja a tabela de distribuição de bolos no balcão e siga as informações do desenho) Varie os sabores, não coloque tudo de um sabor só e siga a ordem dos sabores dentro do balcão.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={39} />
        </div>
      </div>
    </div>
  );
}