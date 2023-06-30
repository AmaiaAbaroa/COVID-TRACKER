
import './_cards.css'
 

const Cards = (props) => {
    //const { card_resum_style, card_resum_title, card_resum_chip_value, card_resum_number_value } = props;
  return (
    <>
  
        <div>
            <div className= {props.card_resum_style}>
                <img className={props.img_country_style} src={props.img_flags_value} alt="" />
                <h4>{props.card_resum_title}</h4>
                <div className={props.card_resum_chip_style}>{props.card_resum_chip_value}</div>
                <div className={props.card_resum_number_style}>{props.card_resum_number_value}</div>
            </div>
        </div>
 
   </>
  )
}

export default Cards;