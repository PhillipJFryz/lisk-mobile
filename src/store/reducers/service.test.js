import service, { INITIAL_STATE } from './service';
import actionTypes from '../../constants/actions';

describe('reducers: service', () => {
  let state;

  beforeEach(() => {
    state = {};
  });

  it('should create the empty state initially', () => {
    const createdState = service();
    expect(createdState).toEqual(INITIAL_STATE);
  });

  it('should return updated state in case of actionTypes.pricesRetrieved', () => {
    const action = {
      type: actionTypes.pricesRetrieved,
      priceTicker: { USD: 1, EUR: 1 },
    };

    expect(service(state, action)).toEqual({
      priceTicker: action.priceTicker,
    });
  });

  it('should return updated state in case of actionTypes.dynamicFeesRetrieved', () => {
    const action = {
      type: actionTypes.dynamicFeesRetrieved,
      dynamicFees: { low: 1, medium: 10, high: 100 },
    };

    expect(service(state, action)).toEqual({
      dynamicFees: action.dynamicFees,
    });
  });
});
