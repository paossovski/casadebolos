import '../../global_styles.css';
import './styles.css';

import Bolos55 from '../../images/bolos_55.jpg';
import Bolos56 from '../../images/bolos_56.jpg';
import Bolos57 from '../../images/bolos_57.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina54 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-54'>
        <p className='Texto T-54'>
          <b>INMETRO:</b> É o órgão do governo que fiscaliza balanças e estes fiscais aparecem de surpresa nas lojas, e sempre estão identificados com crachá. Retirar <b>IMEDIATAMENTE</b> das balanças pequenas (brancas) e esconder. Elas são proibidas. Colocar em uso a balança maior com o selo do INMETRO. A multa é caríssima caso estas balanças brancas sejam pegas na área de produção. Se puder evitar de usar, agradecemos.
        </p><br/>
        <div className='Container-Img-54'>
          <img className='Img-54' src={Bolos55} alt="" />
          <img className='Img-54B' src={Bolos56} alt="" />
        </div><br/><br/><br/>
        <p className='Texto T-54'>
          <b>MANUTENÇÃO –</b> Na folha de produção há um espaço ao final da primeira folha onde tem o campo direcionado para essa questão, e é nesse local que devem anotar os pedidos, como ajustes, reforma e situações importantes, colocando ali a necessidade urgente ou não. <i>Não passar via whatsApp, não ligar, não anotar num papelzinho, é apenas por este local. Se possivel, coloque bem especificicado.</i> 
        </p><br/><br/>
        <img src={Bolos57} alt="" /><br/><br/><br/>
        <p className='Texto T-54'>
          <b>CHOVEU?</b> Não esqueça de colocar a placa de "Cuidado piso molhado" - É lei, é obrigatório. Mantenha um pano e rodo por perto e coloque o porta-guarda chuva junto.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={54} />
      </div>
    </div>
  );
}