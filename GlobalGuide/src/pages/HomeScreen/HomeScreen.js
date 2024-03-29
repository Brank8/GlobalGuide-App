import React, { useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Text,Image, } from "react-native";
import SearchDestination from "../../components/SearchDestination/SearchDestination";
import SearchCurrency from "../../components/SearchCurrency/SearchCurrency";
import { useIsFocused } from "@react-navigation/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function HomeScreen({ navigation }) {
  const [destination, setDestination] = React.useState("");
  const [days, setDays] = React.useState("");
  const [currencyFrom, setCurrencyFrom] = React.useState("");
  const [currencyTo, setCurrencyTo] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const API_KEY = process.env.API_KEY;
  const BASE_URL = process.env.BASE_URL;
  const API_KEY_WEATHER = process.env.API_KEY_WEATHER;
  const BASE_URL_WEATHER = process.env.BASE_URL_WEATHER;
  const API_KEY_CURRENCY = process.env.API_KEY_CURRENCY;
  const BASE_URL_CURRENCY = process.env.BASE_URL_CURRENCY;

  const isFocused = useIsFocused();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (!isFocused) {
      dismissKeyboard();
    }
  }, [isFocused]);

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
          <Text style={styles.headerText}>GlobalGuide</Text>
        </View>
        <SearchDestination
          destination={destination}
          setDestination={setDestination}
          days={days}
          setDays={setDays}
          navigation={navigation}
          API_KEY={API_KEY}
          BASE_URL={BASE_URL}
          API_KEY_WEATHER={API_KEY_WEATHER}
          BASE_URL_WEATHER={BASE_URL_WEATHER}
        />
        <SearchCurrency
          currencyFrom={currencyFrom}
          setCurrencyFrom={setCurrencyFrom}
          currencyTo={currencyTo}
          setCurrencyTo={setCurrencyTo}
          amount={amount}
          setAmount={setAmount}
          API_KEY_CURRENCY={API_KEY_CURRENCY}
          BASE_URL_CURRENCY={BASE_URL_CURRENCY}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "turquoise",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: getStatusBarHeight(),
  },
  headerContainer: {
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
  },
  headerText: {
    color: '#005f73',
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: 2,
    shadowOffset: {
      width: -5,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.84,
    elevation: 5,
  },
});
