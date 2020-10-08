import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component{
    constructor (props){
        super(props);
        this.state = {};
        this.authFunc = this.authFunc.bind(this);
    }

    authFunc(){
        const authData = {data: "auth my site"};
        if(WavesKeeper){
            WavesKeeper.auth(authData)
            .then(auth => {
                console.log(auth);
            }).catch(error => {
                console.log(error)
            });
        }else {
            alert("Install waves Keeper")
        }
    }

    render(){
        return(
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Alert" onClick={this.authFunc}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}
