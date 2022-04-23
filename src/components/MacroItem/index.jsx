import React from 'react';
import Container, { Delete, Edit, Name, Command } from './styled';
import { Icon } from '@fluentui/react/lib/Icon';
import { Text } from '@fluentui/react';
import deleteMacroById from '../../api/deleteMacro';
import { modalAlert, modalPrompt } from '../Modal';
import switchMacroById from '../../api/switchMacro';
import eventEmitter from '../../utils/event';
import { variableNameSetter } from '../../utils/globalVariables';

const MacroItem = ({ _id, actived, name, xml, code }) => {
	const switchActived = () => {
		switchMacroById(_id, actived);
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
		modalAlert({
			title: `Edit macro ${name}`,
			subText: 'Enter new name',
			confirmFunction: () => {
				variableNameSetter('code', code);
				variableNameSetter('xml', xml);
				eventEmitter.emit('changeXML', xml);
			},
			cancellFunction: () => {},
		});
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
