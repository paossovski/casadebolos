import React from 'react';

import './styles.css';
import '../../global_styles.css';

export const Numbering = ({num}) => {
  return(
    <div className='Pagination__Container Pagination__Size'>
      <div className='Pagination__Number'>
        {num}
      </div>
    </div>
  );
}