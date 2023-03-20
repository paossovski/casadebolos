import '../../global_styles.css';
import './styles.css';

import Logotipo from '../../images/bolos_02.png';
import { Numeracao } from '../Numeracao';

export const Pagina03 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-Logotipo'>
        <img className='Logotipo' src={Logotipo} alt="" />
      </div>

      <div className='Container-Texto'>
        <div className='Texto'>
          A Casa de Bolos nasceu no início de 2010 no interior de São Paulo criado pela Vó Sônia. Somos pioneiros e referência na produção e vendas dos nossos queridos bolos caseiros. Santa Catarina recebeu sua primeira loja em Florianópolis, no Centro em 2016 e, em 2017 no bairro do Estreito, seguido pela loja da Anita Garibaldi em 2018, em seguida em 2019, chegou a vez da Cidade de São José, no bairro Kobrasol, 2020 na cidade de Palhoça (e mudamos esta loja para a Mauro Ramos em 2021), e também no centro de Curitiba/PR, seguido por uma loja express no Bairro Novo Mundo em 2022. <br/><br/>

          Em pleno desenvolvimento organizacional, nós da Casa de Bolos trabalhamos investindo em novos processos gerenciais, estrutura administrativa, ampliação de nossas lojas modelos, pesquisas de mercado, além de atender um maior número de clientes. Portanto, a Casa de Bolos, privilegiando as atividades éticas fundamentais, se alicerça em três fundamentos básicos: <br/><br/>

          ●	&nbsp; Qualidade de seus produtos e atendimento; <br/>
          ●	&nbsp; Crescimento ordenado e sustentável; <br/>
          ●	&nbsp; Compromisso com os resultados. <br/><br/><br/><br/>

          <div className='Texto Subtexto'>
            Com base nestes preceitos a Casa de Bolos tem como Missão: <br/>
            “Oferecer as pessoas produtos de qualidade, que garantam sua satisfação, agregando <br/> sabor e valor às suas vidas, trazendo à lembrança as coisas que são realmente <br/> importantes.”
          </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className='Texto Subtexto2'>
            Família Casa de Bolos.
          </div>
        </div>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={3} />
      </div>
    </div>
  );
}