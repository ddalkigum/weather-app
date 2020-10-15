import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#757F9A", "#606c88", "black"],
    title: "Haze",
    subtitle: "Foggy",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#0b8793", "#2c3e50"],
    title: "Thunderstorm",
    subtitle: "Thunderstorm day",
  },
  Drizzle: {
    iconName: "water",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Drizzle",
    subtitle: "Drizzle day",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#757F9A", "#36D1DC"],
    title: "Rain",
    subtitle: "Rainny day",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "Snow",
    subtitle: "Snow day",
  },
  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#F7971E", "#FFD200"],
    title: "Clear",
    subtitle: "Sunny day",
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#304352", "#d7d2cc"],
    title: "Clouds",
    subtitle: "Cloud day",
  },
};
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOption["Clouds"].gradient}
      style={styles.container}
    >
      <View style={styles.halfcontainer}>
        <StatusBar barStyle={"light-content"} />
        <MaterialCommunityIcons
          name={weatherOption["Clouds"].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}⁰</Text>
      </View>
      <View style={styles.halfcontainer}>
        <Text style={styles.title}>{weatherOption["Clouds"].title}</Text>
        <Text style={styles.subtitle}>{weatherOption["Clouds"].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
  },
  subtitle: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
  },
});
