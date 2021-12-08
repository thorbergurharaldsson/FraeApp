<<<<<<< HEAD
import React from "react";
import { Text, View, StyleSheet } from "react-native";

// Icons
import { Icon } from "react-native-elements";

const PickingMonths = (props) => {
  const { treeName, pickingProgress, pickingProgressStatus, months } = props;

  return (
    <View style={{ backgroundColor: "#30361E" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.pickingInfoCard}>
          <Text style={styles.pickingProgressText}>
            {pickingProgress} {pickingProgressStatus}
          </Text>
        </View>
        <View style={styles.pickingInfoCard}>
          <Icon
            name="alarm"
            type="MaterialIcons"
            style={styles.clock}
            size={35}
          />
          <Text style={styles.pickingInfoText}>{months}</Text>
        </View>
      </View>
    </View>
  );
};

export default PickingMonths;

const styles = StyleSheet.create({
  treeName: {
    color: "#FFFDF6",
    fontSize: 36,
    left: 25,
    // marginTop: -430,
    backgroundColor: "#30361E",
  },

  pickingInfoCard: {
    alignItems: "center",
    backgroundColor: "#434B2A",
    width: 72,
    height: 89,
    borderRadius: 16,
    flexWrap: "wrap",
    margin: 16,
  },

  pickingInfoText: {
    color: "#FFFDF6",
    fontSize: 16,
    marginTop: 6,
  },

  pickingProgressText: {
    color: "#FFFDF6",
    fontSize: 16,
    marginTop: 16,
  },

  pickingProgressTextSecondLine: {
    color: "#FFFDF6",
    fontSize: 16,
    marginTop: 5,
  },

  clock: {
    marginTop: 15,
  },
});
=======
import React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';

const styles = StyleSheet.create({
  treeName: {
    color: '#FFFDF6',
    fontSize: 36,
    left: 25,
    marginTop: -430,
    backgroundColor: '#30361E'
  },

  pickingMonthsInfoContainer: {
    alignItems: 'center', 
    backgroundColor: '#434B2A',
    width: 72,
    height: 89,
    left: 104,
    top: -470,
    borderRadius: 16,
  },

  pickingProgressContainer: {
    alignItems: 'center', 
    backgroundColor: '#434B2A',
    width: 72,
    height: 89,
    left: 25,
    top: -380,
    borderRadius: 16,
  },

  pickingInfoText: {
    color: '#FFFDF6',
    fontSize: 16,
    marginTop: 6
  },

  pickingProgressText: {
    color: '#FFFDF6',
    fontSize: 16,
    marginTop: 16
  },

  pickingProgressTextSecondLine: {
    color: '#FFFDF6',
    fontSize: 16,
    marginTop: 5
  },

  clock: {
    marginTop: 15
  },
})

const PickingMonths = (props) => {
  return (
    <>
    <View>
      <Text style={styles.treeName}>{props.treeName}</Text>
    </View>
    <View style={styles.pickingProgressContainer}>
      <Text style={styles.pickingProgressText}>{props.pickingProgress}</Text>
      <Text style={styles.pickingProgressTextSecondLine}>{props.pickingProgressStatus}</Text>
    </View>
    
    <View style={styles.pickingMonthsInfoContainer}>
      <Image style={styles.clock} source={require('../assets/treeInfoIcons/clock.png')} />
      <Text style={styles.pickingInfoText}>{props.months}</Text>
    </View>
   
    </>
  );
}

export default PickingMonths;
>>>>>>> 8ebafac4adcab76fc2de64c92f0b707a35cdd11f
