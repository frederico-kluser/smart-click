import { Spinner, SpinnerSize, Text } from '@fluentui/react';
import { useEffect, useState } from 'react';
import checkUpdate from './api/checkUpdate';
import { Body, Loader } from './App.styled';
import { Modal, modalDefaultConfig, modalPropertyFixer } from './components/Modal';
import BlocklyEditor from './pages/Blockly';
import Macros from './pages/Macros';
import eventEmitter from './utils/event';

function App() {
	const [loaded, setLoaded] = useState(false);
	const [macros, setMacros] = useState([]);
	const [screen, setScreen] = useState('useMacro');
	const [initialXML, setInitialXML] = useState('');

	const [modalConfig, setModalConfig] = useState(modalDefaultConfig);

	useEffect(() => {
		checkUpdate(macros, setMacros, setLoaded);

		//Assign the event handler to an event:
		eventEmitter.on('openModal', (properties) => {
			const { cancellText, cancellFunction, confirmText, confirmFunction, placeholder, subText, title, type } =
			properties = modalPropertyFixer(properties);

			setModalConfig((prevState) => ({
				...prevState,
				cancellFunction: () => {
					cancellFunction();
					setModalConfig((prevState) => ({ ...prevState, show: false }));
				},
				cancellText,
				confirmFunction: () => {
					confirmFunction();
					setModalConfig((prevState) => ({ ...prevState, show: false }));
				},
				confirmText,
				placeholder,
				show: true,
				subText,
				title,
				type
			}));
		});
		eventEmitter.on('closeModal', () => {
			setModalConfig((prevState) => ({ ...prevState, show: false }));
		});
		eventEmitter.on('conformModal', () => {
			setModalConfig((prevState) => ({ ...prevState, show: false }));
		});
		eventEmitter.on('changePage', (page) => {
			setScreen(page);
		});
		eventEmitter.on('changeXML', (xml) => {
			setInitialXML(xml);
		});
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
			{loaded && screen === 'useMacro' && <Macros data={macros} />}
			{loaded && screen === 'createMacro' && <BlocklyEditor initialXML={initialXML} />}
			{ modalConfig.show && <Modal {...modalConfig} /> }
		</Body>
	);
}

export default App;
