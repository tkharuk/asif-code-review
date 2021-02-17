import { MODIFY_VIEW } from 'actions';

const initialState = {
  isAppLoading: false,
  isErrorFetchingView: false,
  isDirty: false,
  view: {
    _id: undefined,
    section: undefined,
    columns: undefined,
    title: undefined,
    createdAt: undefined,
    filters: [],
    links: [],
    scheduledEmails: [],
    shares: [],
    updatedAt: undefined,
    __v: undefined,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_VIEW: {
      const { viewUpdate } = action;
      return {
        ...state,
        view: { ...state.view, ...viewUpdate },
        isDirty: true,
      };
    }

    default:
      return state;
  }
};
