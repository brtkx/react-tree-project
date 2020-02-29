let counterTriggered = false;

const fadeComponentToView = (component, statState, setStatState, animated) => {
  document.addEventListener("scroll", () => {
    if (animated || !component) return;
    const componentTop = component.getBoundingClientRect().top;
    const docHeight = window.innerHeight;
    const inView = componentTop - docHeight * 0.8 < 0 ? true : false;

    if (inView) {
      animated = true;
      showComponent(component);
    }

    // // Check for statistics and start the counter.
    if (component.id === "statsWrap" && inView) {
      startStatsCounter(statState, setStatState);
    }
  });
};

const showComponent = component => {
  component.classList.remove("not-in-view");
  component.classList += " animate";
};

const startStatsCounter = (statState, setStatState) => {
  if (counterTriggered) return;
  const fundsRaisedTotal = Math.ceil(statState.fundsRaisedTotal);

  updateCounter(setStatState.setFundsRaisedDisplayed, fundsRaisedTotal);
  updateCounter(setStatState.setAdsWatchedDisplayed, statState.adsWatchedTotal);
  updateCounter(
    setStatState.setTreesPlantedDisplayed,
    statState.treesPlantedTotal
  );

  // To trigger once.
  counterTriggered = true;
};

const updateCounter = (setState, finalAmount) => {
  // Determine increment speed based on how big the number.
  let increment = Math.ceil(finalAmount / 1000);
  let displayedAmount = 0;

  // Delay subsequent counts.
  const delay = 3 * 1000;
  for (let i = 0; i < finalAmount; i += increment) {
    (i => {
      setTimeout(() => {
        displayedAmount += increment;
        displayedAmount =
          displayedAmount > finalAmount ? finalAmount : displayedAmount;
        setState(displayedAmount);
      }, (delay / finalAmount) * i);
    })(i);
  }
};

export default fadeComponentToView;
