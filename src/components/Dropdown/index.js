import './dropdown.css'

const Dropdown = ({label, items,  fieldValue, onChanged, mandatory = false}) => {
    return (<div className="dropdown">
        <label>{label}</label>
        <select required={mandatory} value={fieldValue} onChange={event => onChanged(event.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default Dropdown