import React from 'react';
import { StyleSheet, View } from 'react-native'

const CenterView: React.FC = (props) => {
  return (
    <View style={ styles.main }>
      { props.children }
    </View>
  )
}

export default CenterView

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})