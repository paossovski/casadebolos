import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page129 = () => {
  return(
    <div 
      id='Page129' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page129__Container'>
        <div className='Page129__Title__Container'>
          <h1 className='Page129__Title'>
            CONSIDERAÇÕES FINAIS - DEPOIMENTOS
          </h1>
        </div>
        <div className='Page129__Content__Container Page__Text'>
          <p className='Page__Text'>
            Aqui você encontrará depoimentos de alguns dos nossos colaboradores:
          </p><br/><br/>
          <p className='Page__Text'>
            <b>Tânia  - Supervisora Administrativa</b> 
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Olá equipe, aqui fica um pouco da minha história, pois sei que muitas de vocês não me conhecem como Tânia e sim como Supervisora da Casa de Bolos. 
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Venho de uma cidade pequena, chamada Rio Negro, localizada no estado do Paraná, lá construi parte da minha história, ao lado dos meus pais e irmãos. Sempre tive acesso fácil aos estudos e sempre me dediquei muito, carrego comigo uma frase do meu pai: Estude, pois o conhecimento é a única coisa que nínguem pode te tirar! Meu pai foi meu maior incentivador durante a minha tragetória, foi minha inspiração, meu espelho, para eu me tornar a profissional que sou hoje. Sempre tive um sonho de estudar Direito, até o momento que por insistência da minha mãe, iniciei um curso chamado Técnica em Gestão de Recursos Humanos, foi ali que descobri a minha vocação e claro me formei nele.
            Um ano depois conheci meu marido e foi nesse momento que senti a necessidade de mudança, nesse mesmo ano mudamos para Balneário Camboriú / SC, trabalhamos em um posto de gasolina, onde foi meu primeiro contato com atendimento ao público, mas devida a minha falta de maturidade naquela época, acabamos voltando para nossa cidade natal, pois sentia muita da minha família. Voltamos, se estabelecemos em Mafra / SC cidade vizinha de Rio Negro, nesse período,  fui contratada como atendente de um restaurante, sempre fazendo as minhas obrigações e me dedicando ao máximo para cuidar daquele emprego, pois a dificuldade de emprego naquela cidade era imensa. Em três meses virei líder de equipe, oito meses virei gerente administrativa do restaurante e um ano e meio administradora de dois resturante da mesma franquia. Costumo dizer, que tudo tem hora, dia e local para acontecer algo de extraodinário em nossa vida, mas pra isso precisamos estar abertos as oportunidades e agarra – lás com unhas e dentes.
            E a cada oportunidade conquistada sentia um necessidade de querer mais, de ser melhor, não somente da empresa, mas pra mim também, conhecer coisas e pessoas novas. Então iniciei  minha faculdade de Bacharela em Administração, onde foi tudo muito essencial para me formar uma gestora por completa, foram os quatros anos mais proveitosos da minha vida. E com mais um diploma em mãos senti a obrigação de voar mais alto e mais longe. Após 8 anos morando em Mafra, eu formada e o Paulo também, demos mais um passo juntos, tomamos a decisão de vir para Florianópolis / SC, ainda estávamos no meio de uma pandemia, seria locura da nossa parte, largar tudo e vir? 
          </p>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={129} />
        </div>
      </div>
    </div>
  );
}