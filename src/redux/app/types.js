import { typeCreator } from 'reddeck';

export default typeCreator(
  `
  INITIAL_SETUP
  INITIAL_SETUP_SUCCESS
  INITIAL_SETUP_ERROR

  SET_NAV_STATE
`,
  { prefix: 'app/' }
);
