// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojidetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojidetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
