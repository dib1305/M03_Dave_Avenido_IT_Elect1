import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const colors = ['white', 'cyan', 'lightgreen'];

const ColorChangerApp = () => {
  const [bgColor, setBgColor] = useState(colors[0]);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.buttonGroup}>
        {colors.map((color) => (
          <Button
            key={color}
            title={color.charAt(0).toUpperCase() + color.slice(1)}
            onPress={() => setBgColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  buttonGroup: { gap: 10 },
});

export default ColorChangerApp;