const getHeader = (state) => state.timetable.header
const getHeaderIndex = (state) => state.timetable.header.index
const getDays = (state) => state.timetable.header.routes

export default {
  getHeader,
  getHeaderIndex,
  getDays
}
