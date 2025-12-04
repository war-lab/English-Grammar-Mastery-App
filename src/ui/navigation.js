
let navigationState = null;

export const getNavigationState = () => navigationState;

export const navigate = (path, state = null) => {
  navigationState = state;
  window.location.hash = path;
};
