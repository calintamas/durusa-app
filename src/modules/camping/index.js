import React from 'react'

import GeneralInfo from '../../components/general-info'

const text = `PLAYGROUND | CAMPING | SHOWERS | TOILETS | //
//
Camping is our recommendation and the only option for a fulltime festival experience. //
//
The camping area has a capacity of 800+ tents and hammocks. Access to showers and toilets is allowed to all festival participants. //
//
We recommend a responsible attitude towards the environment, surroundings and festival setup. This contributes to the full festival experience and we want to start here for making the world a better place. //
//
Keep it green, keep it clean! Use the garbage bins for keeping it clean and if you need extra trash bags, ask our team and we will help you with this. //
//
Campfire is forbidden in the camping area.
`

const Camping = (props) => {
  return (
    <GeneralInfo
      headerTitle='Camping'
      text={text}
      navigation={props.navigation} />
  )
};

export default Camping
