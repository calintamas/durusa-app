import { createStackNavigator } from 'react-navigation'

import Home from '../../../modules/home/container'
import NewsItem from '../../../modules/news-item'
import { getDefaultNavigationOptions } from '../../navigation-options'

const options = {
  defaultNavigationOptions: (props) => getDefaultNavigationOptions(props)
}

const HomeTab = createStackNavigator({
  Home: {
    screen: Home
  },
  NewsItem: {
    screen: NewsItem
  }
}, options)

export default HomeTab
