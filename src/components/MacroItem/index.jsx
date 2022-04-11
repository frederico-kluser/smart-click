import React, { useState } from 'react';
import Container, { Delete, Edit, Name, Command } from './styled';
import { Icon } from '@fluentui/react/lib/Icon';
import { Text } from '@fluentui/react';
import eventEmitter from '../../utils/event';
import deleteMacroById from '../../api/deleteMacro';

const MacroItem = ({ _id, actived, name }) => {
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
				// console.log(data);
			});
	};

	const deleteMacro = () => {
		eventEmitter.emit('openModal');

		/*
		deleteMacroById(_id).then(() => {
			eventEmitter.emit('closeModal');
		})
		*/
	};

	const editMacro = () => {
		eventEmitter.emit('openModal');
	};

	return (
		<Container>
			<Command actived={actived} onClick={switchActived}>
				<Icon iconName={!actived ? 'Play' : 'Pause'} />
			</Command>
			<Name>
				<Text variant="large">{name}</Text>
			</Name>
			<Edit onClick={editMacro}>
				<Icon iconName="Edit" />
			</Edit>
			<Delete onClick={deleteMacro}>
				<Icon iconName="Delete" />
			</Delete>
		</Container>
	);
};

export default MacroItem;
