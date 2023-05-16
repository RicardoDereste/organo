import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const onSave = (event) => {
    event.preventDefault()
    props.onRegisteredEmployee({
      name,
      position,
      image,
      team
    })
    setName('')
    setPosition('')
    setImage('')
    setTeam('')
  }

  return (
    <section className='form'>
        <form onSubmit={onSave}>
            <h2>Fill in the data to create the employee's card</h2>
            <TextField
              required={true}
              label="Name"
              placeholder="Enter name"
              fieldValue={name}
              onChanging={fieldValue => setName(fieldValue)}/>

            <TextField
              required={true}
              label="Position"
              placeholder="Enter position"
              fieldValue={position}
              onChanging={fieldValue => setPosition(fieldValue)}/>
              

            
            <TextField
              label="Image"
              placeholder="Enter image address"
              fieldValue={image}
              onChanging={fieldValue => setImage(fieldValue)}/>

            <Dropdown
              required={true}
              label="Team"
              items={props.teams}
              fieldValue={team}
              onChanging={fieldValue => setTeam(fieldValue)}/>

            <Button text="Create Card"/>
        </form>
    </section>
  )
}

export default Form