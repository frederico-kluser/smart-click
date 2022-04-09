import React, { useState } from 'react';
import Container, { Delete, Edit, Name, Command } from './styled';
import { Icon } from '@fluentui/react/lib/Icon';
import { Text } from '@fluentui/react';

const MacroItem = ({ _id, actived, name }) => {
	const switchActived = () => {
		debugger;
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
				debugger;
				console.log(data);
			});
	};

	return (
		<Container>
			<Command onClick={switchActived}>
				<Icon iconName={!actived ? 'Play' : 'Pause'} />
			</Command>
			<Name>
				<Text variant="large">{name}</Text>
			</Name>
			<Edit>
				<Icon iconName="Edit" />
			</Edit>
			<Delete>
				<Icon iconName="Delete" />
			</Delete>
		</Container>
	);
};

export default MacroItem;
