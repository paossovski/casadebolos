import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page69 = () => {
  return(
    <div 
      id='Page69' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page69__Container'>
        <p className='Page__Text Page69__Text--Align'>
          <span className='Page69__Text--Border'>RH/ADMINISTRATIVO</span>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>REGISTRO DE PONTO:</b> O ponto é registrado através do aplicativo MARQPONTO, Lembrando que a localização deve sempre estar ativa no aparelho. Se não estiver, não vai registrar. O ponto só funciona se estiver no máximo a 100 metros da loja (1 quadra). Não adianta bater o ponto em casa ou no ônibus. Você deve tirar uma foto de corpo inteiro (segurando o celular acima da cabeça - tipo selfie) O sistema faz reconhecimento facial, e a foto deve ser registrada com o uniforme completo (touca, camiseta, avental, sapato, Crachá para quem utiliza, sem brincos, colares e adereços). Sem o uso do uniforme completo o ponto é invalidado e causa advertência. SEMPRE que esquecer de bater ou não conseguir, faça uma solicitação de ajuste, lembrando que mais de duas solicitações, o calaborador perderá o direito de assiduidade.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'> 
          <b>Uniforme incompleto:</b> situação grave que ocasionará a suspensão, independente de quantas advertência o colaborador tiver. 
        </p><br/><br/>
        <p>
          <b>DOCUMENTOS OBRIGATÓRIOS – CONTRATAÇÃO DE COLABORADORAS</b>
        </p><br/><br/>
        <p>
          ⮚	Atestado médico para fins trabalhistas – Admissional;<br/>
          ⮚	Carteira de trabalho;<br/>
          ⮚	RG – cópia simples;<br/>
          ⮚	CPF – cópia simples;<br/>
          ⮚	Título de eleitor – cópia simples;<br/>
          ⮚	Comprovante de residência – cópia simples;<br/>
          ⮚	1 foto 3x4;<br/>
          ⮚	Certidão de nascimento de filhos até 14 anos – cópia simples.<br/>
          ⮚	Currículo atulizado (com referência de empregos anteriores)<br/>
          ⮚	Escopo de trabalho<br/>
          ⮚	Autorização dos gupos de WhatsApp<br/>
          ⮚	Autorização de desconto de compras em loja<br/>
          ⮚	Termo de confidencialidade<br/>
          ⮚	Ficha de EPI<br/>
          ⮚	Ficha registro<br/>
          ⮚	Termo de Assiduidade após três meses<br/>
          ⮚	Termo de proibição do uso do celular<br/>
          ⮚	Comprovação de leitura e entndimento deste manual de condutas
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={69} />
        </div>
      </div>
    </div>
  );
}