import { SpinnerContainer, SpinnerOverlay } from "./spinner.style.jsx";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent />
    );
  };

export default WithSpinner;
