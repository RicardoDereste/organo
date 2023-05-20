import Employee from '../Employee'
import hexToRgba from 'hex-to-rgba';
import './team.css'

const Team = ({ team, employees, onDelete, changeColor, onFavorite }) => {
    return (

        employees.length > 0 && <section className='team' style={{ backgroundImage: 'url(/img/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
            <input type='color' className='input-color' value={team.color} onChange={event => {
                changeColor(event.target.value, team.id);
            }} />
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className='employees'>
                {employees.map((employee, index) => {
                    return (
                        <Employee
                            key={index}
                            employee={employee}
                            bgColor={team.color}
                            onDelete={onDelete}
                            onFavorite={onFavorite}
                        />
                    )
                })}
            </div>
        </section>

    )
}

export default Team