import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import HealthMetricCard from '../components/HealthMetricCard';
import { ProgressChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const screenWidth = width;

export default function HomeScreen() {
  const data = {
    labels: ['Heart Rate', 'Sleep', 'Weight'],
    data: [0.7, 0.8, 0.6],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Health Overview</Text>
      <ProgressChart
        data={data}
        width={screenWidth - 40}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
        style={styles.chart}
      />
      <HealthMetricCard title="Heart Rate" value="72 bpm" />
      <HealthMetricCard title="Sleep" value="8h 2m" />
      <HealthMetricCard title="Weight" value="80 kg" />
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: width * 0.08, // Adjust font size based on screen width
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  chart: {
    marginVertical: 20,
  },
});


