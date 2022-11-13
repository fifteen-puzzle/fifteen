let win;

if (typeof window !== 'undefined' && typeof window.getComputedStyle === 'function') {
  win = window;
} else {
  win = {
    getComputedStyle() {
      return {
        getPropertyValue() { return {} },
      };
      },
    addEventListener() { return {} },
  };
}

export default win;
