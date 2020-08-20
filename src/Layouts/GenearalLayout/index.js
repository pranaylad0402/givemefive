import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { StatusBar} from 'react-native';
import { getScreenWidthAndHeight } from "../../helpers";
const { width, height } = getScreenWidthAndHeight();


export default ({ children }) => (
	<Container style={{width:width,height:height}}>
	<Content>
	{children}
	</Content>
	</Container>
	);