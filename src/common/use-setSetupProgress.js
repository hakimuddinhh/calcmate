import { useDispatch, useCallback } from "react-redux";
import { setSetupProgress } from "../actions/Actions";


const useSetSetupProgress = (completedSteps) => {
  debugger;
  const dispatch = useDispatch();

  const setSetupProgressCB = () => {
    debugger;
    if (typeof completedSteps === "number") {
      dispatch(setSetupProgress(completedSteps));
    } else {
      console.error('completedSteps in useSetSetupProgress hook must be passed as a valid Number !');
    }

    return true;
  }

  return setSetupProgressCB;

}

export default useSetSetupProgress;
