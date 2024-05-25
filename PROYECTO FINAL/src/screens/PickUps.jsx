import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import PickUpCard from '../components/PickUpCard';
import { colors } from '../constants/colors';
import { useGetPickUpsQuery } from '../services/reservationService';
import { useSelector } from 'react-redux';

const PickUpsScreen = () => {
  const { localId } = useSelector(state => state.auth.value);
  const { data: PickUps, isSuccess, isError } = useGetPickUpsQuery(localId);
  const [pickUpsFiltered, setPickUpsFiltered] = useState([]);

  useEffect(() => {
    if (isSuccess && PickUps) {
      const responseTransformed = Object.values(PickUps);
      const filteredPickUps = responseTransformed.filter(pickUp => pickUp.user === localId);
      setPickUpsFiltered(filteredPickUps);
    }
  }, [PickUps, isSuccess, localId]);

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Ocurrió un error al cargar las reservas</Text>
      </View>
    );
  }

  if (pickUpsFiltered.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Aún no has confirmado tus reservas</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pickUpsFiltered}
        renderItem={({ item }) => <PickUpCard pickup={item} />}
      />
    </View>
  );
};

export default PickUpsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Q
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Q,
  },
  errorText: {
    color: colors.MG,
    fontSize: 18,
    fontFamily: "SedanSC",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Q,
  },
  emptyText: {
    color: colors.MG,
    fontSize: 18,
    fontFamily: "SedanSC",
  },
});

