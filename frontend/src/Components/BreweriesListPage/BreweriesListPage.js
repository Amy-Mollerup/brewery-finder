import React from 'react'

export default function BreweriesListPage() {
  return(
    const { isLoading, users } = this.state;
    return(
    <section className="section">
        <div className="container">
          {!isLoading ? (
            users.map(user => {
              return <Users key={user.username} user={user} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>;

    </section>
  );
  )
}

const Users = ({user}) => {
    return (
      <div className="box media">
        <figure className="image is-96x96 media-left">
            <img src={user.image} alt={user.name} />
        </figure>
        <div className="media-content">
          <p className="subtitle">{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
    )
  }
  
  
  class App extends React.Component {
    state = {
      users: [],
      isLoading: true,
      errors: null
    };
  
    getUsers() {
      axios
        .get("https://randomuser.me/api/?results=5")
        .then(response =>
          response.data.results.map(user => ({
            name: `${user.name.first} ${user.name.last}`,
            username: `${user.login.username}`,
            email: `${user.email}`,
            image: `${user.picture.thumbnail}`
          }))
        )
        .then(users => {
          this.setState({
            users,
            isLoading: false
          });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.getUsers();
    }
  
    render() 
  }
  
  ReactDOM.render(<App />,
  document.getElementById("root"))