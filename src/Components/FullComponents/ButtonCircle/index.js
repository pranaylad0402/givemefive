import React, { Component } from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';

export default (props) => {
    const { text } = props;
    const {color}=props;
       const {textColor   }=props;
    return (
        <TouchableOpacity{...props}>
            <View style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                borderWidth: 2,
                borderColor: '#F60C25',
                backgroundColor:color
            }} >

                <Text style={{ alignSelf: "center", fontSize: 20, alignItems: 'center', marginTop: 10, color: textColor }}> {text} </Text>

            </View>
        </TouchableOpacity>
    );

}


