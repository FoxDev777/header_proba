
const handlePrevSlider = (func) => {
    func((prevIndexes) => {
      const nextIndexes = prevIndexes.map((elem) => (elem + 1) % 5);
      return nextIndexes;
    });
  },
   handleNextSlider = (func) => {
    func((prevIndexes) => {
      const nextIndexes = prevIndexes.map((elem) =>
        elem - 1 < 0 ? 4 : (elem - 1) % 5
      );
      return nextIndexes;
    });
  };

  export {handleNextSlider,handlePrevSlider}