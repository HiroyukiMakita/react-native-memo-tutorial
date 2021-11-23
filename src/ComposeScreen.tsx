import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { save } from './store';

export const ComposeScreen = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  const onPressSave = async () => {
    await save(text, Date.now());
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={{ marginBottom: 16 }}
        mode='outlined'
        placeholder='メモを入力してください'
        multiline
        onChangeText={(text) => setText(text)}
        autoComplete='none'
      />
      <Button mode='contained' onPress={onPressSave}>
        保存
      </Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
