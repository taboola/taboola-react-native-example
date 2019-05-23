import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/taboola-logo.png';

const StyledImage = styled.Image`
	justify-content: center;
	align-self: center;
`;

const TaboolaLogo = props => <StyledImage source={Logo} />;

export default TaboolaLogo;
