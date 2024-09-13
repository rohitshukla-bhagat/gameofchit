// Setting the green border to the selected player by the prince 
export const greenBorder = (elem) => {
  if (elem.classList.value != "theifOption") {
    elem.classList.add("greenBorder");
    // Checking conditions that the border will disappear after selecting the another option 
    if (elem.nextElementSibling) {
      const classValue = elem.nextElementSibling.classList.value;
      const classes = classValue.split(" ");
      if (classes[1] == "greenBorder") {
        elem.nextElementSibling.classList.remove("greenBorder");
        elem.classList.add("greenBorder");
      }
    } else if (elem.previousElementSibling) {
      const classValue = elem.previousElementSibling.classList.value;
      const classes = classValue.split(" ");
      if (classes[1] == "greenBorder") {
        elem.previousElementSibling.classList.remove("greenBorder");
        elem.classList.add("greenBorder");
      }
    } else {
      elem.classList.add("greenBorder");
    }
    return 1;
  }else{
    return 0;
  }
};
