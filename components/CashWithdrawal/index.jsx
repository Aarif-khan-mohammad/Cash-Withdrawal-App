import DenominationItem from '../DenominationItem/index.jsx';
import {Component} from 'react';
import './index.css';

class CashWithdrawal extends Component {

  state ={cash : 2000}

  onDenominationChange = (value)=>{
    this.setState({cash : this.state.cash - value})
  }

  render(){
    const {cash} = this.state;
    const {denominationList} = this.props;
    return(
      <div className='cash-denomination'>
        <div className='withdrawal-card'>
          <div className='first-container'>
            <h4 className="profile-img">S</h4>
            <h2 className="profile-name">Sarah Williams</h2>
          </div>
          <div className='second-container'>
            <h3 className="balance-para">Your Balance</h3>
            <p className="balance-amount">{cash}
              <br/>
              <span className='balance-in-rupees'>In Rupees</span>
            </p>
          </div>
          <h2 className='withdraw'>Withdraw</h2>
          <h3 className="choose-amount">CHOOSE SUM (IN RUPEES)</h3>
          <ul className='denomination-container'>
            { denominationList.map((each)=> 
              <DenominationItem denominate = {each} 
                key={each.id} 
                ondenomination = {this.onDenominationChange} /> ) 
            }
          </ul>
        </div>
      </div>
    )
  }
  
}

export default CashWithdrawal;