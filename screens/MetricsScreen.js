import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HealthMetricCard from '../components/HealthMetricCard';

export default function MetricsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Health Data</Text>
      
      <View style={styles.row}>
        <HealthMetricCard metric="Tarps" value="125" />
        <HealthMetricCard metric="Consume" value="240 Kcal" />
      </View>

      <HealthMetricCard metric="Remaining" value="345 Kcal" />

      <View style={styles.row}>
        <HealthMetricCard metric="See State" value="345 Kcal" />
        <HealthMetricCard metric="Salary Progress" value="24 Kcal" />
      </View>

      <Text style={styles.subTitle}>Heart Rate</Text>
      <Text style={styles.heartRate}>102 bpm</Text>

      <Text style={styles.subTitle}>Daily Intake</Text>
      <View style={styles.row}>
        <HealthMetricCard metric="Carbs" value="51%" />
        <HealthMetricCard metric="Protein" value="10%" />
        <HealthMetricCard metric="Fat" value="39%" />
      </View>

      <Text style={styles.cheers}>Cheers! to new beginnings and better health!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', paddingVertical: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '80%' },
  subTitle: { fontSize: 20, marginTop: 20, marginBottom: 10 },
  heartRate: { fontSize: 18, marginBottom: 20 },
  cheers: { fontSize: 16, marginTop: 20, fontStyle: 'italic' }
});
