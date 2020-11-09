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

import ClusterBasic from '../routes/cluster/basic';
import ClusterList from '../routes/cluster/list';
import ClusterFirefox from '../routes/cluster/firefox';
import ClusterNested from '../routes/cluster/nested';

import SidebarMediaObject from '../routes/sidebar/mediaobject';
import SidebarMediaObjectSwitched from '../routes/sidebar/mediaobjectswitched';
import SidebarSearchWidget from '../routes/sidebar/searchwidget';

import SwitcherBasic from '../routes/switcher/basic';

import CoverBasic from '../routes/cover/basic';
import CoverWithClusterHeader from '../routes/cover/withclusterheader';

import GridBasic from '../routes/grid/basic';
import GridWithCard from '../routes/grid/withcard';

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

			<ClusterBasic path="/cluster/basic" />
			<ClusterList path="/cluster/list" />
			<ClusterFirefox path="/cluster/firefox" />
			<ClusterNested path="/cluster/nested" />

			<SidebarMediaObject path="/sidebar/mediaobject" />
			<SidebarMediaObjectSwitched path="/sidebar/mediaobjectswitched" />
			<SidebarSearchWidget path="/sidebar/searchwidget" />

			<SwitcherBasic path="/switcher/basic" />

			<CoverBasic path="/cover/basic" />
			<CoverWithClusterHeader path="/cover/withclusterheader" />

			<GridBasic path="/grid/basic" />
			<GridWithCard path="/grid/withcard" />
		</Router>
	</div>
)

export default App;