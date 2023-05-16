import './TextField.css'

const TextField = (props) => {

  const placeholderChanged = `${props.placeholder}...`

  const onTyping = (event) => {
    props.onChanging(event.target.value)
  }

  return (
    <div className="text-field">
        <label>{props.label}</label>
        <input value={props.fieldValue} onChange={onTyping} required={props.required} placeholder={props.placeholder}/>
    </div>
  )
}

export default TextField