import React from "react";
import clsx from "clsx";
import css from'./Statistics.module.css';



function Statistics(data) {

  const arrayData = data.data;
  

  const randomBg = () => {
	return `#${Math.floor(Math.random() * 16777215)
	  .toString(16)
	  .padStart(6, 0)}`;
 };


  return (<section className={css.statistics}>
	<h2 className={css.title}>Upload stats</h2>
 
	<ul className={css.statList}>
	{arrayData.map(data => (
      <li style={{ backgroundColor: randomBg(),}} className= {clsx(css.item)}key={data.id}>
         <span className={css.label}>{data.label}</span>
         <span className={css.percentage}>{data.percentage}</span>
		</li>
    ))}
	</ul>
 </section>);
 
}

export default Statistics;

// {clsx(css.item, data.color)}

