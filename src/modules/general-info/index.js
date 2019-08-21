import React from 'react'

import GeneralInfo from '../../components/general-info'

const text = `
Road Runner Society Association or Road Runner, as we like to say, is founded by a group of young people with management skills in educational and cultural areas. Since the beginning Road Runner had the mission to promote artistic and cultural experiment as a lifestyle and support sustainable and responsible development in the rural areas through activism and facilitation of economic growth.
//
We have actively participated in the development process of the Maramureș-Chioar area through our projects, which focus on rural revival through educational, touristic and cultural events. Durușa SummerHills is on our agenda since 2010, although the first editions (2010-2012) weren’t advertised to the public eye.
//
The festival gained its reputation on the market as a small-size event with trustworthy picks of artists and partners. //
//
Durușa Summer Hills Principles: //
• Supporting the alternative and sustainable way of natural resource exploitation.
//• Integrating art and culture as rural development instruments.
//• Promoting a grateful attitude towards the use of natural resources and the surroundings.
//• Developing an active and vocal rural community.
`

const GeneralInfoWrapper = (props) => {
  return (
    <GeneralInfo
      headerTitle='General information'
      text={text}
      navigation={props.navigation} />
  )
};

export default GeneralInfoWrapper
