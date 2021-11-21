import dayjs from 'dayjs';
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List } from 'react-native-paper';

const memos = [
  {
    text: 'メモメモメモ',
    createdAt: 1585574700000, // 2020.03.30 22:25
  },
  {
    text: 'メモメモメモ',
    createdAt: 1585567500000, // 2020.03.30 20:25
  },
  {
    text: '長いメモメモメモメモメモメモメモメモメモメモメモメモメモメモ',
    createdAt: 1585459500000, // 2020.03.29 14:25
  },
  {
    text: 'メモメモメモ',
    createdAt: 1585369500000, // 2020.03.28 13:25
  },
  {
    text: 'メモメモメモ',
    createdAt: 1585275900000, // 2020.03.27 11:25
  },
];

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memos} // リストにするデータを配列で渡す
        keyExtractor={(item) => `${item.createdAt}`} // リストのキーを文字列で指定
        renderItem={({ item }) => (
          <List.Item // React Native Paper
            title={item.text}
            titleNumberOfLines={5} // 5 行に改行できる範囲までは省略せず表示する
            description={`作成日時: ${dayjs(item.createdAt).format(
              'YYYY.MM.DD HH:mm'
            )}`}
            descriptionStyle={{ textAlign: 'right' }} // description に属性するスタイル
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
