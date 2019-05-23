import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';

const TextInputContainer = styled.View`
	border-bottom-width: 1;
	border-bottom-color: lightgrey;
`;

const StyledTextInput = props => (
	<TextInputContainer>
		<TextInput
			style={{
				fontSize: 20,
			}}
			{...props}
		/>
	</TextInputContainer>
);

export default StyledTextInput;
