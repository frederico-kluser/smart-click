import { Spinner, SpinnerSize, Text } from '@fluentui/react';
import { useEffect, useState } from 'react';
import checkUpdate from './api/checkUpdate';
import { Body, Loader } from './App.styled';
import { confirmActionGetter, confirmActionSetter, Modal, modalDefaultConfig } from './components/Modal';
import BlocklyEditor from './pages/Blockly';
import Macros from './pages/Macros';
import eventEmitter from './utils/event';

let confirmAction = () => {};

function App() {
	const [loaded, setLoaded] = useState(false);
	const [macros, setMacros] = useState([]);
	const [screen, setScreen] = useState("useMacro");

	const [modalConfig, setModalConfig] = useState({
		...modalDefaultConfig,
		openModal: () => {
			setModalConfig((prevState) => ({ ...prevState, show: true }));
		},
		confirmFunction: () => {
			setModalConfig((prevState) => ({ ...prevState, show: false }));
			const confirmAction = confirmActionGetter();
			confirmAction();
		},
		cancellFunction: () => {
			setModalConfig((prevState) => ({ ...prevState, show: false }));
		},
	});

	useEffect(() => {
		checkUpdate(macros, setMacros, setLoaded);

		//Assign the event handler to an event:
		eventEmitter.on('openModal', (func = () => {}) => {
			setModalConfig((prevState) => ({ ...prevState, show: true }));
			confirmActionSetter(func);
		});
		
		eventEmitter.on('closeModal', () => {
			setModalConfig((prevState) => ({ ...prevState, show: false }));
		});

		eventEmitter.on('changePage', (page) => {
			setScreen(page);
		});

		//Fire the 'scream' event:
		// eventEmitter.emit('scream');
	}, []);

	return (
		<Body>
			<Text variant="xxLarge">Smart-Click</Text>
			<Text style={{ marginBottom: 50 }}>client offline</Text>
			{!loaded && (
				<Loader>
					<Spinner size={SpinnerSize.large} label="Loading Macros..." />
				</Loader>
			)}
			{(loaded && screen === "useMacro") && <Macros data={macros} />}
			{(loaded && screen === "createMacro") && <BlocklyEditor />}
			<Modal {...modalConfig} />
		</Body>
	);
}

export default App;
