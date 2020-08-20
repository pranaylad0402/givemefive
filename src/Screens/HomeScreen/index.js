import React, {useState} from 'react';
import {Container, Header, Content, Button, Text} from 'native-base';
import {GeneralLayout} from '../../Layouts';
import {HeaderComponent, ButtonCircle, Spacer} from '../../Components';
import {View, Image, Dimensions} from 'react-native';
import {imagesConfig} from '../../config';
import {getScreenWidthAndHeight} from '../../helpers';
const {width, height} = getScreenWidthAndHeight();
const firstLineData = ['P', 'L', 'P', 'T', 'S'];
const secondLineData = ['A', 'C', 'E', 'H', 'D'];

export default () => {
  const [word, setWord] = useState('');
  const [length, setLength] = useState();
  const onPress = (item) => {
    var stringWord = word.concat(item);
    var length = stringWord.length;
    setWord(stringWord);
    setLength(length);
  };

  return (
    <GeneralLayout>
      <HeaderComponent />
      <Spacer size={20} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 23,
          marginRight: 23,
        }}>
        {firstLineData.map((item) => (
          <ButtonCircle
            text={item}
            textColor="#F60C25"
            onPress={() => onPress(item)}
          />
        ))}
      </View>
      <Spacer size={20} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 23,
          marginRight: 23,
        }}>
        {secondLineData.map((item) => (
          <ButtonCircle
            text={item}
            textColor="#F60C25"
            onPress={() => onPress(item)}
          />
        ))}
      </View>
      <Spacer size={30} />
      <View
        style={{
          flexDirection: 'row',
          marginRight: 19,
          marginLeft: 19,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>{word}</Text>
        {word != '' && (
          <ButtonCircle text={length} textColor="#ffffff" color="red" />
        )}
      </View>
      <Image
        style={{
          marginTop: height - 500,
          alignItems: 'center',
          marginLeft: 10,
          height: 300,
          width: width,
          bottom: 0,
        }}
        source={imagesConfig.footerIcon}
      />
    </GeneralLayout>
  );
};
