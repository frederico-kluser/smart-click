import { Spinner, SpinnerSize, Text } from '@fluentui/react';
import { useEffect, useState } from 'react';
import checkUpdate from './api/checkUpdate';
import { Body, Loader } from './App.styled';
import { Modal } from './components/Modal';
import BlocklyEditor from './pages/Blockly';
import Macros from './pages/Macros';

function App() {
	const [loaded, setLoaded] = useState(false);
	const [macros, setMacros] = useState([]);
	const [screen, setScreen] = useState("useMacro");

	const [modalConfig, setModalConfig] = useState({
		title: 'Modal Title',
		subText: 'Modal SubText',
		confirmText: 'Ok',
		show: false,
		confirmFunction: () => {
			setModalConfig((prevState) => ({ ...prevState, show: false }));
		},
		cancellText: 'Cancell',
		cancellFunction: () => {
			setModalConfig((prevState) => ({ ...prevState, show: false }));
		},
	});

	

	useEffect(() => {
		checkUpdate(macros, setMacros, setLoaded);
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
			{(loaded && screen === "useMacro") && <Macros data={macros} setModalConfig={setModalConfig} setScreen={setScreen} />}
			{(loaded && screen === "createMacro") && <BlocklyEditor setModalConfig={setModalConfig} setScreen={setScreen} />}
			<Modal {...modalConfig} />
		</Body>
	);
}

export default App;
