// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevValue => ({balance: prevValue.balance - value}))
  }

  render() {
    const {denominationsList} = this.props

    const {balance} = this.state

    const name = 'Sarah Williams'
    const initialName = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="app-card-container">
          <div className="name-container">
            <h1 className="letter-style">{initialName}</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>

            <p className="balance-status">
              {balance}
              <br />
              <span className="in-rupees">In Rupees</span>
            </p>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-buttons-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationDetails={each}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
