import './field.css'

const Field = ({ type = 'text', label, placeholder, fieldValue, onChanged, mandatory = false }) => {
    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={fieldValue}
                onChange={event => onChanged(event.target.value)}
                required={mandatory}
                placeholder={placeholder}
            /> 
        </div>)
}

export default Field