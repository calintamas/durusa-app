import React from 'react'

import GeneralInfo from '../../components/general-info'

const text = `Drinks //
// Fresh cocktails, disco shots and frosty beverages. The menu is completed with a Maramureș traditional list of local spirits and refreshers. We have prepared a fine selection of soft and alcoholic drinks, at the usual affordable price, for a great party. Alcoholic drinks will not be served to under 18. //

We set 2 bars in place for a fast service & fresh coffee will be provided by Nomad Coffee. // //
// > Tasty Food Masters // Get your tummy ready! A hand-picked selection of food trucks will supply you with sweet’n’sour desserts and salt’n’peppa goodies. Just bring your appetite. //
// > Vagabundos // TEX-MEX food (Cubano sandwich, Grilled Cheese, Tacos, Chilli con Carne, Pornachos) spiced with some local magic. //
// > Pizza Hai Hui // A well heated oven, tender and fluffy dough, fresh ingredients from trusted sources (tomatoes, porcini, home-made cheese, fresh basil), this is the formula for happiness that they will serve. //
// > Munch // The best waffles you will ever eat in Romania. Sweet and salty, with nutella, strawberries and ice-cream or maybe with tomatoes, rucola and sheep cheese, the real deal. //
// > BRGRean // A burger joint dedicated to creating the yummiest burgers. //
//
// > Fresh juice corner // Refresh with fruit juices to dance some more. //`;

const Food = (props) => {
  return (
    <GeneralInfo
      headerTitle='Food & Drinks'
      text={text}
      navigation={props.navigation} />
  )
};

export default Food
