import './index.css'

const DenominationItem = (props)=>{

  const {denominate , ondenomination} = props;
  const {id, value} = denominate;

  const denominationClick = ()=>{
    ondenomination(value);
  }

  return(
    <li className='denomination-item'>
      <button className='denomination-button' onClick={denominationClick}>
        {value}
      </button>
    </li>
  )
  
  
}

export default DenominationItem;