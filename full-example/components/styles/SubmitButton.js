import React from 'react';
import { Button, Platform } from 'react-native';
import styled from 'styled-components';

const SubmitButtonOuterContainer = styled.View`
	margin-top: 20;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const SubmitButtonInnerContainer = styled.View`
	width: 150;
	border-color: ${props => {
		if (props.disabled) {
			return 'aliceblue';
		} else if (Platform.OS === 'ios') {
			return '#0875ff';
		} else {
			return 'white';
		}
	}};
	border-width: 1;
	border-radius: 5;
`;

const SubmitButton = props => (
	<SubmitButtonOuterContainer>
		<SubmitButtonInnerContainer disabled={props.disabled}>
			<Button {...props} />
		</SubmitButtonInnerContainer>
	</SubmitButtonOuterContainer>
);

export default SubmitButton;
