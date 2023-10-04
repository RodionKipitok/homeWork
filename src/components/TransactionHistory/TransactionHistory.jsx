import React from "react";
import '../TransactionHistory/TransactionHistory.css'



function TransactionHistory(data) {

const arrData  = data.items;	


	return (
	<table className='table'>
	<thead className='head'>
	  <tr>
		 <th className='headTitle'>Type</th>
		 <th className='headTitle'>Amount</th>
		 <th className='headTitleCurrence'>Currency</th>
	  </tr>
	</thead>
	<tbody>
	{arrData.map(item => ( 
	   <tr className='line' key={item.id}>
      <td className='cell'>{item.type}</td>
      <td className='cell'>{item.amount}</td>
      <td className= 'cellCurrency'>{item.currency}</td>
    </tr>
 ))}
	</tbody>
 </table>);
};

export default TransactionHistory;

{/*	   <tr className={css.line} key={item.id}>
      <td className={css.cell}>{item.type}</td>
      <td className={css.cell}>{item.amount}</td>
      <td className= {css.cellCurrency}>{item.currency}</td>*/}