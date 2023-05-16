import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programming',
      colorPrimary: '#57C278',
      colorSecondary: '#D9F7E9'
    },
    {
      name: 'Front End',
      colorPrimary: '#82CFFA',
      colorSecondary: '#E8F8FF'
    },
    {
      name: 'Data Science',
      colorPrimary: '#A6D157',
      colorSecondary: '#F0F8E2'
    },
    {
      name: 'Devops',
      colorPrimary: '#E06B69',
      colorSecondary: '#FDE7E8'
    },
    {
      name: 'UX & Design',
      colorPrimary: '#DB6EBF',
      colorSecondary: '#FAE9F5'
    },
    {
      name: 'Mobile',
      colorPrimary: '#FFBA05',
      colorSecondary: '#FFF5D9'
    },
    {
      name: 'Innovation and Management',
      colorPrimary: '#FF8A29',
      colorSecondary: '#FFEEDF'
    }
  ]

  const [employees, setEmployees] = useState([])

  const onNewEmployeeAdded = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.name)} onRegisteredEmployee={employee => onNewEmployeeAdded(employee)}/>
      
      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        colorPrimary={team.colorPrimary}
        colorSecondary={team.colorSecondary}
        employees={employees.filter(employee => employee.team == team.name)}
        />)}

        <Footer/>
    </div>
  );
}

export default App;
