import './index.css'

const TransactionItem = props => {
  const {transactionsDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionsDetails

  const onClickDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button className="delete-button" type="button" data-testid="delete">
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            onClick={onClickDelete}
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
