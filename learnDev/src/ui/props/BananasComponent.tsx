import React, { FC } from "react";
import { Image, StyleSheet } from 'react-native';

const Bananas: FC = () => {
  const pic_url = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }

  return (
    <Image source={pic_url} style={styles.bananas} />
  )
}

const styles = StyleSheet.create({
  bananas: {
    width: 193,
    height: 110
  }
})

export default Bananas