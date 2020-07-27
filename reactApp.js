class Team extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            shots: 0,
            score: 0
        }
        this.shotSound = new Audio('./images/Back+Board.mp3')
        this.scoreSound = new Audio('./images/0477.mp3')
    }
    shotHandler = (event) => {
        let score = this.state.score
        this.shotSound.play()
        if (Math.random() > 0.5) {
            score += 1
            setTimeout(() => {this.scoreSound.play()},100)
        }
        this.setState((state, props) => ({shots: state.shots +1, score}))
    }
    
    render () {
        let shotPercentageDiv
        if (this.state.shots){

        const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
        shotPercentageDiv = (<div><strong> Shooting %:{shotPercentage} </strong></div>)
    }
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>
=            <div className="identity">
                <img src={this.props.logo} alt={this.props.name} />
                </div>
            <div>
                <strong> Shots Fired:</strong>
                {this.state.shots}
                </div>
            <div>
                <strong>Shots hit:</strong>
                {this.state.score}
            </div>
            {shotPercentageDiv}
            <button onClick={this.shotHandler}>Shoot!</button>
            
        </div>
        )
    }
}

function Game(props) {
    return(
    <div className="Game">
        <h1>Welcome to {props.venue}!</h1>
        <div className="stats">
            <Team name={props.visitingTeam.name}
            logo={props.visitingTeam.logoSrc}
            />
        <div className="versus">
            <h1>VS</h1>
        </div>
        <Team name={props.homeTeam.name} logo={props.homeTeam.logoSrc} />
        </div> 
        </div>
        )
}

function App(props) {
    const wendigos = {name: 'Watoga Wendigos',logoSrc:'./images/EQRDMh8WAAE-MPP.jpg'}
    const scorchbeasts = {name: 'Charleston Scorchbeasts' , logoSrc: './images/scorchbeast.jpg'}
    const mothmen = {name: 'Point Pleasant Mothmen', logoSrc: './images/Dwxi3fVWoAATZT0.jpg'}
    const grafton = {name: 'Grafton Monsters', logoSrc: './images/GraftonMonster.jpg'}
    return (
      <div className="App">
         <Game venue="Watoga"
         homeTeam={wendigos}
         visitingTeam={scorchbeasts} />
         <Game venue="Point Pleasant" 
         homeTeam={mothmen}
         visitingTeam={grafton}/>
         
        </div>
    )
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )