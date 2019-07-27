import { typeCreator } from 'reddeck'

export default typeCreator(`
  GET
  GET_SUCCESS
  GET_ERROR
`, { prefix: 'locations/' })
