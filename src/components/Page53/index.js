import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page53 = () => {
  return(
    <div 
      id='Page53' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page53__Container'>
        <p className='Page__Text Page__Line--Height'>
        ao alto consumo de produtos gordurosos (ex: oléo de soja e margarina) o risco de entupimento na caixa de gordura é muito grande, jogando água quente todos os dias, evitamos esse entupimento. Por isso essa prática é uma obrigação.
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>LANÇAMENTO DE CAIXA:</b> É obrigatório o lançamento de todas as comandas (delivery, vendas de balcão – via cartões, dinheiro, pix entre outros) no sistema. Lançar despesas como Vales Transportes, compras emergenciais autorizadas, pagamentos emergenciais autorizados, e uber). Lançar imediatamente no momento da venda as compras de funcionários ou fiados/parcerias autorizadas. Lembrando que somente a supervisão pode dar baixa nestas compras.  É importante lançar corretamente a venda referente ao produto, não pode haver deduções. Ex: vendeu 1 bolo de iogurte, tem que ser lançado bolo de iogurte. Importante lançar tudo, no dia. Nas lojas existem pessoas responsavel para isso. 
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>CADASTROS:</b> As lojas devem registrar em seu proprio sistema as comandas dos clientes, tirar todas as informações possiveis e cadastrar. 
        </p><br/>
        <p className='Page__Text'>
          <b>NOTAS, BOLETOS E FATURAS:</b> Enviar no malote do dia, assim que receber.
        </p><br/>
        <p className='Page__Text'>
          <b>RECEBEU CURRÍCULO NA LOJA –</b> Receba, agradeça, anote a data, e a loja que está recebendo e coloque no malote do dia. Cadastramos todos em nosso banco de currículos.
        </p><br/><br/>
        <p className='Page__Text'>
          Ligações com o uso de DDD: Sempre usar o prefixo – ALGAR 012.  Evitem usar outros. Esse DDD é compatível com a empresa telefônica que nos atende, sendo assim, gerando gastos menores com essas ligações.
        </p><br/><br/>
        <p>
          <b className='Page53__Background--Color'>Curitiba:</b> 021<br/>
          <b className='Page53__Background--Color'>Novo Mundo:</b> 021
        </p><br/><br/>
        <p className='Page__Text'>
          •	Para ligações pessoais apenas com autorização da supervisão. 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>NOTA FISCAL ELETRÔNICA:</b> Solicitar ao cliente os dados (Nome, telefone, CNPJ, e-mail e endereço e inscrição estadual (e se é isento) ) e o pedido de bolos. Avisar que enviaremos por e-mail. Entrar em contato com a Central de Atendimento, passar os dados, o produto (bolo, velas e afins) com o valor.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={53} />
        </div>
      </div>
    </div>
  );
}