import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { View, Image, Dimensions } from 'react-native';
import { imagesConfig } from "../../../config";
import styles from "./style";
import { Spacer } from "../../MiniComponents";
export default class HeaderComponent extends Component {
  render() {
    return (
      <View>
        <Spacer size={20} />
        <Image
          style={styles.headerIcon}
          source={imagesConfig.headerIcon}
        />
        <Spacer size={30} />
        <Text style={styles.headerText}>Give me Five</Text>
        <Spacer size={10} />
        <View
          style={styles.headerLine}
        />
      </View>
    );
  }
}