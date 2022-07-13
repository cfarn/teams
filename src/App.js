import React from 'react'
import teams from './teams.json'
import TeamInfo from './components/TeamInfo'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='mt-3 mb-3'>Teams</h1>
        <section className='row gap-3 justify-content-center'>
          {
            teams.map(teams => {
              return(
                <TeamInfo
                  shortName = {teams.shortName}
                  crestUrl = {teams.crestUrl}
                  venue = {teams.venue}
                  address = {teams.address}
                  email = {teams.email}
                  phone = {teams.phone}
                  founded = {teams.founded}
                />
              )
            })
          }
        </section>
      </div>
    )
  }


}

export default App 