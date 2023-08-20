

export default function Button(props) {
const handlePlus = () => {
  props.onClickPlus(props.increment)
}

const handleMinus = () => {
  props.onClickMinus(props.increment)
}
  
  return (
    <div>
      <button
        onClick={handlePlus}>
        + {props.increment}
      </button>
      <button
        onClick={handleMinus}>
        - {props.increment}
      </button>
    </div>
  )
}