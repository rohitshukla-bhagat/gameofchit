// In this file the scores and names of the players organized into an array
export const setScoreTo = (scoreFromLS , realName , value) => {
    let realValue = 0 ;
    scoreFromLS.forEach((element , index) => {
        if(index%2 == 0){
            if(element == realName){
                scoreFromLS[index + 1] += value;
                realValue = scoreFromLS[index + 1];
        }
        }
    });
    return realValue ;
}