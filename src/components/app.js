import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

import StackNormal from '../routes/stack/normal'
import StackRecursive from '../routes/stack/recursive';

const App = () => (
	<div id="app">
		<Router>
			<Home path="/" />
			<StackNormal path="/stack/normal" />
			<StackRecursive path="/stack/recursive" />
		</Router>
	</div>
)

export default App;