import ReactDOM from 'react-dom';
import React from 'react';
import Waves from "@waves/signer";
import Provider from "@waves.exchange/provider-web";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.authFunc = this.authFunc.bind(this);
    }

    async authFunc() {
        // setting the TestNet Signer
        const waves = new Waves({ NODE_URL: 'https://pool.testnet.wavesnodes.com' });
        // setting the Waves.Exchange provider
        const provider = new Provider('https://testnet.waves.exchange/signer/');
        waves.setProvider(provider);
        const userData = await waves.login();
        return userData;
        console.log(userData)
    }
    

    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Alert" onClick={this.authFunc} />
            </div>
        )
    }
}

const app = document.getElementById('app');
if (app) {
    ReactDOM.render(<App />, app);
}
