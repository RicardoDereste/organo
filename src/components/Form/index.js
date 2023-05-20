import { useState } from 'react'
import Button from '../Button'
import Field from '../Field'
import Dropdown from '../Dropdown'
import './form.css'

const Form = ({onRegister, teams, registerTeam}) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [nameTeam, setNameTeam] = useState('')
    const [colorTeam, setColorTeam] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('form submited', name, position, image, team )
        onRegister({
            name,
            position,
            image,
            team
        })
    }

    return (
        <section className="form-container">
            <form className="form" onSubmit={onSubmit}>
                <h2>Fill in the data to create the employee's card.</h2>
                <Field
                    mandatory={true}
                    label='Name'
                    placeholder='Enter name '
                    fieldValue={name}
                    onChanged={fieldValue => setName(fieldValue)}/>
                <Field
                    mandatory={true}
                    label='Position' 
                    placeholder='Enter position '
                    fieldValue={position}
                    onChanged={fieldValue => setPosition(fieldValue)}/>
                <Field 
                    label='Image' 
                    placeholder='Enter image address '
                    onChanged={fieldValue => setImage(fieldValue)}/>
                <Dropdown 
                    mandatory={true}
                    label='Teams'
                    items={teams} 
                    fieldValue={team}
                    onChanged={fieldValue => setTeam(fieldValue)}/>
                <Button text='Create card' />
            </form>
            <form className="form" onSubmit={(event) => {
                event.preventDefault()
                registerTeam({name: nameTeam, color: colorTeam})
            }}>
                <h2>Fill in the data to create a new team.</h2>
                <Field
                    mandatory
                    label='Name'
                    placeholder='Enter team name '
                    fieldValue={nameTeam}
                    onChanged={fieldValue => setNameTeam(fieldValue)}
                />
                <Field
                    mandatory
                    type='color'
                    label='Color' 
                    placeholder='Choose team color '
                    fieldValue={colorTeam}
                    onChanged={fieldValue => setColorTeam(fieldValue)}
                />
                <Button text='Create new team' />
            </form>
        </section>
    )
}

export default Form