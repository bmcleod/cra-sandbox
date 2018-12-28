import { compose, withHandlers, withState } from "recompose";

const withActiveToggle = compose(
  withState('isActive', 'setIsActive'),
  withHandlers({
    toggle: ({ isActive, setIsActive }) => () => setIsActive(!isActive),
  }),
);

export default withActiveToggle;
