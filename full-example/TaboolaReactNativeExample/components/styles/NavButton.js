import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

const NavButtonContainer = styled.View`
	font-size: 20;
	height: 50;
	margin-top: 15;
	padding-left: 10;
	padding-right: 10;
`;

const NavButton = props => (
	<NavButtonContainer>
		<Button {...props} />
	</NavButtonContainer>
);

export default NavButton;
