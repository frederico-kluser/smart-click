import { Spinner, SpinnerSize, Text } from '@fluentui/react';
import { useEffect, useState } from 'react';
import { Body, Loader } from './App.styled';
import { Modal } from './components/Modal';
import Macros from './pages/Macros';
import { compareObject } from './utils/general';

async function checkUpdate(macros, setMacros, setLoaded) {
	await new Promise((resolve) =>
		fetch('http://localhost:8080/macro/allMacros')
			.then((response) => response.json())
			.then(({ data }) => {
				setMacros(data);
				setLoaded(true);
				resolve();
			}),
	);

	while (true) {
		await new Promise((resolve) => setTimeout(resolve, 100));
		await new Promise((resolve) =>
			fetch('http://localhost:8080/macro/allMacros')
				.then((response) => response.json())
				.then(({ data }) => {
					if (!data.length || !compareObject(macros, data)) {
						setMacros(data);
					}
					resolve();
				}),
		);
	}
}

function App() {
	const [loaded, setLoaded] = useState(false);
	const [macros, setMacros] = useState([]);

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
			{loaded && <Macros data={macros} setModalConfig={setModalConfig} />}
			<Modal {...modalConfig} />
		</Body>
	);
}

export default App;
