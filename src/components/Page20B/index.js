import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Map } from '../Maps';

export const Page20B = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <Map 
        latitude = {-25.43120222964651}
        longitude = {-49.274520491881574}
        text={'Casa de Bolos Curitiba'}
      />
    </div>
  );  
}    