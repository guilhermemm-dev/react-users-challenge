import './App.css';
import api from './services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rotas from './routes';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/').then((res) => {
      const { results } = res.data;
      setUsers(results);
    });
  }, []);

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      //habilitar busca por botão
      <button onClick={() => {}}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contry</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => {
              console.log(user);
              if (search == '') {
                return user;
              } else if (
                user.name.first
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                user.name.last
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                String(user.dob.age)
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                user.location.country
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                user.gender
                  .toLowerCase()
                  .includes(search.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user) => {
              console.log(user.login.uuid);
              return (
                <tr className="users" key={user.login.uuid}>
                  <td>
                    <Link
                      to={`/details/${user.login.uuid}`}
                    >
                      <img src={user.picture.thumbnail} />
                    </Link>
                  </td>
                  <td>
                    {user.name.first} {user.name.last}
                  </td>
                  <td>{user.dob.age}</td>
                  <td>{user.location.country}</td>
                  <td>{user.gender}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default App;
