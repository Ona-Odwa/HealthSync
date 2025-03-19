//reusable component
import { View, Text, StyleSheet } from 'react-native';

export default function HealthMetricCard({ title, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    width: '45%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

