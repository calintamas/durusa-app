import React from 'react';

import GeneralInfo from '../../components/general-info';

const text = `Location: Durusa, com. Valea Chioarului, jud. Maramures, CP 437372, Romania //
// BY BUS //
Closest station: Valea Chioarului, MM, 2 km away from festival welcome point. //
You can hitchhike a ride, after entering the road to Durusa – 500m away from the bus station. //
// BY CAR //
The only acces to the venue is from E58, the european road connecting Cluj-Napoca to Baia Mare. Follow travel directions to Valea Chioarului and here you will encounter a Durusa 2 (km) sign. Festival road signs are set down the road from here. //
// Only authorized vehicle have access to the festival location – organizers, partners, sponsors, police etc. //
// CAR SHARING – strongly recommended //
If you are travelling by car, please car share to fill up any of your empty seats.//
Car sharing will help you save money by sharing the costs and reduce the amount of traffic on the roads, helping the environment.
//
Visit our Facebook Event or www.blablacar.ro to find drivers offering spaces in their car or festival goers who need a lift. //
// BY TRAIN //
Closest train station is in Ileanda, 22 km away from the festival. //
// BY AIRPLANE //
Closest airports are located in Cluj-Napoca (120km away) and in Baia Mare (33 km away from Durusa). //
// PARKING //
The parking in the village is free, but if you want to park your car closer to the festival you will need special access. You can buy the parking access for uphill from the ticket checkpoint!
`;

const Map = (props) => {
  return (
    <GeneralInfo
      headerTitle='How to get to Durusa'
      text={text}
      navigation={props.navigation}
    />
  );
};

export default Map;
