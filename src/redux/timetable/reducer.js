import timetableTypes from './types'

const initialState = {
  header: {
    index: 0,
    routes: [
      {
        key: 'day1',
        title: 'day 1',
        subtitle: '23.08'
      },
      {
        key: 'day2',
        title: 'day 2',
        subtitle: '24.08'
      },
      {
        key: 'day3',
        title: 'day 3',
        subtitle: '25.08'
      }
    ]
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case timetableTypes.SET_HEADER_TAB: {
      return ({
        ...state,
        header: {
          ...state.header,
          index: action.payload
        }
      })
    }

    default:
      return state
  }
}
