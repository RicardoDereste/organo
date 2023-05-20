import './employee.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Employee = ({ employee, bgColor, onDelete, onFavorite }) => {
    function favorite() {
        onFavorite(employee.id)
    }

    const propsFavorite = {
        size: 25,
        onClick: favorite
    }

    return (<div className="employee">
        <AiFillCloseCircle
            size={25}
            className="delete"
            onClick={() => onDelete(employee.id)}
        />
        <div className="header" style={{ backgroundColor: bgColor }}>
            <img src={employee.image} alt={employee.name} />
        </div>
        <div className="card-info">
            <h4>{employee.name}</h4>
            <h5>{employee.position}</h5>
            <div className='favorite'>
                {employee.myFavorite
                    ? <AiFillHeart {...propsFavorite} color='#FF0000'/>
                    : <AiOutlineHeart {...propsFavorite}/>
                }
            </div>
        </div>
    </div>)
}

export default Employee