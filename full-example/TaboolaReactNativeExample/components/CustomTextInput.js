import React from 'react';
import StyledTextInput from './styles/StyledTextInput';

const CustomTextInput = props => (
	<StyledTextInput autoCapitalize="none" {...props} />
);

export default CustomTextInput;
