import React from 'react'
// raccourci
// import {Component} from 'react'
import teams from './teams.json'
import TeamInfo from './components/TeamInfo'
import Counter from './components/Counter'

class App extends React.Component {
  constructor () {
    // permet d'accéder aux valeurs et méthodes de la classe et de les étendre
    super ()

    // state
    this.state = {
      count : 10
    }
  }

  // méthodes
  handleClickMin = () => {
    // this.setState((state) => {
    //   if(state.count > 1) {
    //     return {count:state.count-1}
    //   }
    // })

    if(this.state.count > 1) {
      this.setState({
        count: this.state.count -1
      })
    }
  }
  handleClickPlus= () => {
    // this.setState((state) => {
    //   return {count:state.count+1}
    // })

    if(this.state.count < teams.length) {
      this.setState({
        count: this.state.count +1
      })
    }
  }




  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Teams</h1>

        {/* counter */}
        <section className=''>
          <Counter
            count = {this.state.count}
            substract = {this.handleClickMin}
            increment = {this.handleClickPlus}
          />
        </section>

        {/* teams */}
        <section className='row gap-3 justify-content-center'>
          {
            teams.filter((team, i) => i < this.state.count ).map(teams => {
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
                // on peut aussi retourner le tableau entier, les infos seront récupérées de l'autre côté : il faudra rajouter "teams" dans les props (ex. this.props.teams.phone)
                // <TeamInfo team = {team}/>
              )
            })
            // avec un slice
            // teams.slice(0, this.state.count ).map(teams => {
            //   return(
            //     <TeamInfo
            //       shortName = {teams.shortName}
            //       crestUrl = {teams.crestUrl}
            //       venue = {teams.venue}
            //       address = {teams.address}
            //       email = {teams.email}
            //       phone = {teams.phone}
            //       founded = {teams.founded}
            //     />
            //   )
            // })

          }
        </section>
      </div>
    )
  }


}

export default App 