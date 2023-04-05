import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina09 = () => {
  return(
    <div className='Pagina Mobile Pagina-Container Margens'> 
      <div className='Texto'>
        <h1 className='Titulo-Pagina09'>COMPOSIÇÕES DE EQUIPES</h1><br/>
        <p className='Texto Line-Pagina09'>
          Nossas lojas são formadas de acordo com a demanda de produção e vendas diárias. Ou seja, não tem um  número fixo de colaboradoras para cada loja. Buscamos sempre montar equipe/loja da melhor maneira possível. Contamos com a Atendente e responsável, é quem faz o contato presencial e inicial, nossa ‘cara’ Casa de Bolos – responsável por esbanjar simpatia, carinho e alegria, claro que com foco vender nossos bolinhos e espalhar o caseirinho mais querido por diversas regiões. Temos Auxiliar de Produção podendo ser o encarregada por dar suporte ao atendimento no desenforme, separação de encomendas, montagem de bolos, abastecendo e passando coberturas para a parte de cima do balcão. Importante missão em deixar os clientes encantados com as nossas variedades de bolos e opções de coberturas. Produz coberturas e potes para abastecer a loja em que está alocada. E por fim, atendimento ao público presencial ou via ligação.  Dependendo da situação e demanda, a boleira tem uma auxiliar para dar suporte a boleira com insumos e organização na parte de limpeza. E por fim, nossa boleira, nossas ‘mãos de Deus’, quem produz nossos bolinhos deliciosos e cheirosos que atraem clientes até mesmo sem querer os clientes das lojas. Responsável por diariamente manter os bolos fresquinhos e quentinhos.
        </p>
        <p className='Texto Line-Pagina09'>
          Ou seja, nossas lojas contam com produção própria de bolos, de insumos, potes e coberturas. Cada loja é independente por sua organização (área de atendimento, produção diária e limpeza), pedidos semanais para reabastecer seu depósito (matéria prima e demais materiais).  Lojas independentes, mas todas vinculadas devido Murilo ser o franqueado das lojas de Florianópolis, São José e no Centro e Novo Mundo em Curitiba, tendo então, as mesmas condutas, regras, organizações e processos. Para dar suporte no atendimento ao cliente (lojas de Florianópolis e Região) – sugestões, críticas     construtivas, reclamações e até mesmo dúvidas em relação as atendentes sobre campanhas, ações e atividades diárias, temos a Central de Atendimento. Está alocada na unidade Estreito e Centro 3, direcionado a este suporte com as lojas, atendimento ao cliente através de redes sociais ou ligações e com o delivery.
        </p>
        <p className='Texto Line-Pagina09'>
          E por fim, contamos com a parte de Gestão, sendo composto por uma Supervisora Administrativa e de Recursos Humanos, responsável por documentações, escalas de produção, compras, depósito e sistema. E com Tutoras de Atendimento, responsáveis pela qualidade de atendimento tanto presencial, quanto online e através de telefonemas, parcerias, qualidade e padrão de produtos, escala de atendimento e inteligência de vendas.
        </p> 
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={9} />
      </div>
    </div>
  );
}