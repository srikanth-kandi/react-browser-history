import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, title, timeAccessed, logoUrl, domainUrl} = historyDetails
  const url = `https://${domainUrl}`
  const onRemoveHistory = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="history-item-con1">
      <div className="history-item-con2">
        <p className="history-time">{timeAccessed}</p>
        <div className="history-item-con3">
          <img
            src={logoUrl}
            alt="domain logo"
            className="history-domain-logo"
          />
        </div>
        <div className="history-item-con4">
          <p className="history-title">{title}</p>
          <a href={url} className="history-domain-url">
            <p>{domainUrl}</p>
          </a>
        </div>
      </div>
      <button
        className="history-del-btn"
        type="button"
        onClick={onRemoveHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="history-del-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
