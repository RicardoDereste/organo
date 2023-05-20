import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Team from "./components/Team";
import {v4 as uuidv4} from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programming',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX & Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Innovation and Management',
      color: '#FF8A29'
    },
  ]);

  const initial = [
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'JULIANA AMOASEI',
      position: 'Software Developer and Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript Developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'PAULO SILVEIRA',
      position: 'Hipster and CEO of Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'JULIANA AMOASEI',
      position: 'Software Developer and Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript Developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'PAULO SILVEIRA',
      position: 'Hipster and CEO of Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'JULIANA AMOASEI',
      position: 'Software Developer and Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript Developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'PAULO SILVEIRA',
      position: 'Hipster and CEO of Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'JULIANA AMOASEI',
      position: 'Software Developer and Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript Developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'PAULO SILVEIRA',
      position: 'Hipster and CEO of Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'JULIANA AMOASEI',
      position: 'Software Developer and Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript Developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'PAULO SILVEIRA',
      position: 'Hipster and CEO of Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'JULIANA AMOASEI',
      position: 'Software Developer and Instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript Developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      myFavorite: false,
      name: 'PAULO SILVEIRA',
      position: 'Hipster and CEO of Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [employees, setEmployees] = useState(initial)

  function deleteEmployee(id) {
    setEmployees(employees.filter(employee => employee.id !== id));
  }

  function changeColor(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  function registerTeam(newTeam) {
    setTeams([...teams, {...newTeam, id: uuidv4()}])
  }

  function solveFavorite(id) {
    setEmployees(employees.map(employee => {
      if(employee.id === id) employee.myFavorite = !employee.myFavorite
      return employee
    }))
  }

  return (
    <div>
      <Banner />
      <Form
        registerTeam={registerTeam}
        teams={teams.map(team => team.name)}
        onRegister={employee => setEmployees([...employees, employee])}
      />
      <section className="teams">
        <h1>My organization</h1>
        {teams.map((team, index) =>
          <Team
            onFavorite={solveFavorite}
            changeColor={changeColor}
            key={index}
            team={team}
            employees={employees.filter(employee => employee.team === team.name)}
            onDelete={deleteEmployee}
          />
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
