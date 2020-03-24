import React from 'react';
import ReactDOM from 'react-dom';
/*


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

const user = {
	firstName: "Miguel",
	lastName: "Carmona",
	avatar: "https://avatars1.githubusercontent.com/u/8202172?s=460&u=de013159c0c156be023d00eafed21385153a1016&v=4",
	age: 31
};

const getGrettings = (user) => {
	if(user) {
		return <h1>Hola {user.firstName} {user.lastName}</h1>
	} else {
		return <h1>Hola desconocido</h1>
	}
}

//const element = getGrettings(user);
const element = (
	<div class="test">
		{getGrettings(user)}
		<img src={user.avatar}/>
	</div>
);
const container = document.getElementById("root");
ReactDOM.render(element, container);