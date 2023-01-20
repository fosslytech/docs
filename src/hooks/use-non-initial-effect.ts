import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

// It's same as useEffect but doesn't run on initial render
// https://www.thearmchaircritic.org/tech-journals/prevent-useeffects-callback-firing-during-initial-render

const useNonInitialEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const initialRender = useRef(true);

  useEffect(() => {
    let effectReturns: void | (() => void | undefined) | any = () => {};

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effectReturns = effect();
    }

    if (effectReturns && typeof effectReturns === 'function') {
      return effectReturns;
    }
  }, deps);
};

export default useNonInitialEffect;
