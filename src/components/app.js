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
import StackOnlyChild from '../routes/stack/onlychild';

import BoxBasic from '../routes/box/basic';
import BoxWithinStack from '../routes/box/withinstack';
import BoxWithHeader from '../routes/box/withheader';

import CenterBasic from '../routes/center/basic';
import CenterIntrinsic from '../routes/center/intrinsic';
import CenterStackInBox from '../routes/center/stackcenteredinbox';

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
			<StackOnlyChild path="/stack/onlychild" />

			<BoxBasic path="/box/basic" />
			<BoxWithinStack path="/box/withinstack" />
			<BoxWithHeader path="/box/withheader" />

			<CenterBasic path="/center/basic" />
			<CenterIntrinsic path="/center/intrinsic" />
			<CenterStackInBox path="/center/stackcenteredinbox" />

		</Router>
	</div>
)

export default App;