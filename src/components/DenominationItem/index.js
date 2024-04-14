// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props

  const {value} = denominationDetails

  const onDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="button-list">
      <button className="button" type="button" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
