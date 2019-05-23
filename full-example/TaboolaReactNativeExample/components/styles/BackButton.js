import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

const BackButtonContainer = styled.View`
	margin-top: 10;
	margin-bottom: 10;
	width: 100;
`;

const BackButton = props => (
	<BackButtonContainer>
		<Button {...props} />
	</BackButtonContainer>
);

export default BackButton;
