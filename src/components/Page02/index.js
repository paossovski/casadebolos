import '../../global_styles.css';
import './styles.css';

import cdb02 from '../../images/cdb_02.png';
import { Numbering } from '../Numbering';

export const Page02 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      
      <div className='Img-Container'>
        <img className='Img-Indice' src={cdb02} alt="" />
        <div className='Container-Titulo-Indice'>
          <span className='Titulo-Indice'><b>ÍNDICE</b></span>
        </div>
      </div>
      <div className='Container'>
        <div className='Indice'>
          <div className='Indice-Container'>
            <span className='Descricao'>Apresentação Casa de Bolos</span>
            <span className='Numeracao'>03</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Missão, Visão e Valores</span>
            <span className='Numeracao'>04</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Nossa história</span>
            <span className='Numeracao'>05</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Composição de equipes</span>
            <span className='Numeracao'>09</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Central de Atendimento</span>
            <span className='Numeracao'>10</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Nossa primeira loja</span>
            <span className='Numeracao'>12</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Inaugurações e endereços</span>
            <span className='Numeracao'>13</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Como explicar onde estão localizadas as lojas em Florianópolis e Região</span>
            <span className='Numeracao'>14</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Casa de Bolos Curitiba</span>
            <span className='Numeracao'>18</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Trabalhos e Ações Sociais</span>
            <span className='Numeracao'>22</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Curiosidades</span>
            <span className='Numeracao'>24</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Dicas da Vó Sonia</span>
            <span className='Numeracao'>25</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Nossas Bases</span>
            <span className='Numeracao'>37</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Orientações para área de atendimento   </span>
            <span className='Numeracao'>38</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Informações complementares</span>
            <span className='Numeracao'>51</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Situação Emergencial LockDown</span>
            <span className='Numeracao'>56</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Comunicação entre lojas e com clientes
            </span>
            <span className='Numeracao'>57</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Área de produção</span>
            <span className='Numeracao'>59</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Atendimento ao cliente</span>
            <span className='Numeracao'>67</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>RH e Administrativo</span>
            <span className='Numeracao'>69</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Sobre nossos bolos</span>
            <span className='Numeracao'>71</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Estacionamento</span>
            <span className='Numeracao'>74</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Redes Sociais</span>
            <span className='Numeracao'>76</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Relação com Clientes</span>
            <span className='Numeracao'>78</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Práticas diárias de colaboradoras</span>
            <span className='Numeracao'>80</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Delivery</span>
            <span className='Numeracao'>89</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>FAQ</span>
            <span className='Numeracao'>92</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Escopos de Trabalho</span>
            <span className='Numeracao'>110</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Fotos</span>
            <span className='Numeracao'>122</span> <br/>
          </div>
          <div className='Indice-Container'>
            <span className='Descricao'>Considerações Finais - Depoimentos
            </span>
            <span className='Numeracao'>129</span> <br/>
          </div>
        </div>
      </div>
      <div className='Paginacao-Container'>
        <Numbering num={2} />
      </div>
    
    </div>
  );
}