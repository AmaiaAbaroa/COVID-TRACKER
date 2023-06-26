const Cards = (props) => {

    //<h3>{props.cardTitle} : {props.todayCases}</h3>
  
  
   
  
    return (
      <div>
    
          <div>
            <div className= {props.card_resum_style}>
             <h4>{props.card_resum_title}</h4>
             <div className='card_resum_chip'>{props.card_resum_chip_value}</div>
             <div className={props.card_resum_number_style}>{props.card_resum_number_value}</div>
            </div>
          </div>
       
      </div>
    );
  }     
  
  export default Cards;