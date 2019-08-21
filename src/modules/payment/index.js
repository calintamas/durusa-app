import React from 'react'

import GeneralInfo from '../../components/general-info'

const text = `Cash: Vendors only accept cash for purchases. //
// Credit card / Debit card - Only at the bar and at the access gate.`

const Payment = (props) => {
  return (
    <GeneralInfo
      headerTitle='Payment methods'
      text={text}
      navigation={props.navigation} />
  )
};

export default Payment
