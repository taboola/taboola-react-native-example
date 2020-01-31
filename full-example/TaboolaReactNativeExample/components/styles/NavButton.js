import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

const NavButtonContainer = styled.View`
	font-size: 14;
	height: 35;
	margin-top: 3;
	margin-bottom: 3;
	padding-left: 12;
	padding-right: 12;
`;

const NavButton = props => (
	<NavButtonContainer>
		<Button {...props} />
	</NavButtonContainer>
);

export default NavButton;
