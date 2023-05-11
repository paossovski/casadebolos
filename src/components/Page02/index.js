import '../../global_styles.css';
import './styles.css';

import cdb02 from '../../images/cdb_02.png';
import { Numbering } from '../Numbering';

export const Page02 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page02__Container'>
        <img className='Page02__Img' src={cdb02} alt="" />
        <div className='Page02__Title__Container'>
          <b className='Page02__Title--Font'>ÍNDICE</b>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Apresentação Casa de Bolos
          </span>
          <span className='Page__Index'>03</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Missão, Visão e Valores
          </span>
          <span className='Page__Index'>04</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Nossa história
          </span>
          <span className='Page__Index'>05</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Composição de equipes
          </span>
          <span className='Page__Index'>09</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Central de Atendimento
          </span>
          <span className='Page__Index'>10</span>
        </div> 
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Nossa primeira loja
          </span>
          <span className='Page__Index'>12</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Inaugurações e endereços
          </span>
          <span className='Page__Index'>13</span>
        </div>
        <div className='Page02__Index'>
          <div className='Page_Break'>
            <span className='Page__Index'>
              Como explicar onde estão localizadas  &nbsp; 
            </span>
            <span className='Page__Index'>
              as lojas em  Florianópolis e Região
            </span>
          </div>
          <div className='Page__Break--Number'>
            <span className='Page__Index'>14</span>
          </div>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Casa de Bolos Curitiba
          </span>
          <span className='Page__Index'>18</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Trabalhos e Ações Sociais
          </span>
          <span className='Page__Index'>22</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Curiosidades
          </span>
          <span className='Page__Index'>24</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Dicas da Vó Sônia
          </span>
          <span className='Page__Index'>25</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Nossas Bases
          </span>
          <span className='Page__Index'>37</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Orientações para área de atendimento
          </span>
          <span className='Page__Index'>38</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Informações complementares
          </span>
          <span className='Page__Index'>51</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Situação Emergencial LockDown
          </span>
          <span className='Page__Index'>56</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Comunicação entre lojas e com clientes
          </span>
          <span className='Page__Index'>57</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Área de produção
          </span>
          <span className='Page__Index'>59</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Atendimento ao cliente
          </span>
          <span className='Page__Index'>67</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            RH e Administrativo
          </span>
          <span className='Page__Index'>69</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Sobre nossos bolos
          </span>
          <span className='Page__Index'>71</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Estacionamento
          </span>
          <span className='Page__Index'>74</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Redes Sociais
          </span>
          <span className='Page__Index'>76</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Relação com Clientes
          </span>
          <span className='Page__Index'>78</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Práticas diárias de colaboradoras
          </span>
          <span className='Page__Index'>80</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Delivery
          </span>
          <span className='Page__Index'>89</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            FAQ
          </span>
          <span className='Page__Index'>92</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Escopos de Trabalho
          </span>
          <span className='Page__Index'>110</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Fotos
          </span>
          <span className='Page__Index'>122</span>
        </div>
        <div className='Page02__Index'>
          <span className='Page__Index'>
            Considerações Finais - Depoimentos
          </span>
          <span className='Page__Index'>129</span>
        </div>                                            
      </div>
      <div className='Pagination__Container'>
        <Numbering num={2} />
      </div>
    </div>
  );
}