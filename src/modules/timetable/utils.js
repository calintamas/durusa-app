import { groupByKey } from '../../utils/array'

const groupByDay = (data = []) => {
  return groupByKey(data, 'day', { prefix: 'day' })
}

const groupByLocation = (groupedByDayData = {}) => {
  let output = {}
  Object.keys(groupedByDayData).forEach((key) => {
    output[key] = groupByKey(groupedByDayData[key], 'location_id')
  })
  return output
}

const groupData = (data = []) => {
  return groupByLocation(groupByDay(data))
}

export {
  groupData
}
