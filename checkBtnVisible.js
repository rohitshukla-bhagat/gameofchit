// Here the Check button is created and will be visible 
export const checkBtnVisible = () => {
    const checkBtnParent = document.querySelector(".checkBtn");
    const checkBtnTempl = document.querySelector("#checkBtnTemplate");
    const checkBtn = document.importNode(checkBtnTempl.content , true);
    if (checkBtnParent.firstElementChild) {
      checkBtnParent.firstElementChild.remove();
      checkBtnParent.append(checkBtn);
    } else {
      checkBtnParent.append(checkBtn);
    }
}