// import * as React from 'react'
// import { Button } from 'react-native-paper'
// import { DatePickerModal } from 'react-native-paper-dates'

// function Appointment() {
//   const [visible, setVisible] = React.useState(false)
//   const onDismiss = React.useCallback(() => {
//     setVisible(false)
//   }, [setVisible])

//   const onChange = React.useCallback(({ date }) => {
//     setVisible(false)
//     console.log({ date })
//   }, [])

//   const date = new Date()

//   return (
//     <>
//       <DatePickerModal
//         mode="single"
//         visible={visible}
//         onDismiss={onDismiss}
//         date={date}
//         onConfirm={onChange}
//         saveLabel="Save" // optional
//         label="Select date" // optional
//         animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
//         locale={'en'} // optional, default is automically detected by your system
//       />
//       <Button onPress={()=> setVisible(true)}>
//         Pick date
//       </Button>
//     </>
//   )
// }

// export default Appointment;

import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Appointment = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", datetime);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Appointment;