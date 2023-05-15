import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const isActiveClassName = isActiveTabId ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActiveClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
