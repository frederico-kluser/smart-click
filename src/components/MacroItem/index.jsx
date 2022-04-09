import React, { useState } from 'react';
import Container, { Delete, Edit, Name, Command } from './styled';
import { Icon } from '@fluentui/react/lib/Icon';
import { Text } from '@fluentui/react';

const MacroItem = ({ _id, actived, name, setModalConfig }) => {
	const switchActived = () => {
		fetch(`http://localhost:8080/macro/switchActived/?id=${_id}`, {
			method: 'PUT',
			body: JSON.stringify({ actived: !actived }),
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then(({ data }) => {
				console.log(data);
			});
	};

	const deleteMacro = () => {
		setModalConfig((prevState) => ({
			...prevState,
			title: `Delete ${name}`,
			subText: 'Are you sure you want to delete this macro?',
			show: true,
			confirmFunction: () => {
				fetch(`http://localhost:8080/macro/delete/?id=${_id}`, {
					method: 'DELETE',
					body: JSON.stringify({ actived: !actived }),
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
					},
				})
					.then((response) => response.json())
					.then(({ data }) => {
						console.log(data);
					});
				setModalConfig((prevState) => ({ ...prevState, show: false }));
			},
		}));
	};

	return (
		<Container>
			<Command actived={actived} onClick={switchActived}>
				<Icon iconName={!actived ? 'Play' : 'Pause'} />
			</Command>
			<Name>
				<Text variant="large">{name}</Text>
			</Name>
			<Edit>
				<Icon iconName="Edit" />
			</Edit>
			<Delete onClick={deleteMacro}>
				<Icon iconName="Delete" />
			</Delete>
		</Container>
	);
};

export default MacroItem;
