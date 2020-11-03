import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

import StackNormal from '../routes/stack/normal'
import StackRecursive from '../routes/stack/recursive';
import StackNested from '../routes/stack/nested';
import StackException from '../routes/stack/exception';
import StackExceptionWithUtilityClass from '../routes/stack/exceptionwithutilityclass';
import StackSplit from '../routes/stack/split';

const App = () => (
	<div id="app">
		<Router>
			<Home path="/" />
			<StackNormal path="/stack/normal" />
			<StackRecursive path="/stack/recursive" />
			<StackNested path="/stack/nested" />
			<StackException path="/stack/exception" />
			<StackExceptionWithUtilityClass path="/stack/exceptionwithutilityclass" />
			<StackSplit path="/stack/split" />
		</Router>
	</div>
)

export default App;