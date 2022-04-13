import React from 'react';
import Container, { Delete, Edit, Name, Command } from './styled';
import { Icon } from '@fluentui/react/lib/Icon';
import { Text } from '@fluentui/react';
import deleteMacroById from '../../api/deleteMacro';
import { modalAlert, modalPrompt } from '../Modal';
import { put } from '../../api/crud';
import { switchMacroActived } from '../../api/urls';

const MacroItem = ({ _id, actived, name }) => {
	const switchActived = () => {
		put(switchMacroActived + _id, actived);
	};

	const deleteMacro = () => {
		modalAlert({
			confirmFunction: () => {
				deleteMacroById(_id);
			},
			title: `Delete macro ${name}`,
			subText: 'Are you sure to delete this macro?',
		});
	};

	const editMacro = async () => {
		const result = await modalPrompt({
			title: `Edit macro ${name}`,
			subText: 'Enter new name',
			placeholder: name
		});

		alert(result);
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
