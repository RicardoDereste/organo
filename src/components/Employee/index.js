import './Employee.css'

const Employee = ({name, image, position, bgColor}) => {
  return (
    <div className='employee'>
        <div className='header' style={{backgroundColor: bgColor}}>
            <img src={image} alt={name}/>
        </div>
        <div className='card-info'>
            <h4>{name}</h4>
            <h5>{position}</h5>
        </div>
    </div>
  )
}

export default Employee