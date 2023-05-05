export const formsObject = {
    firstSelect: "",
    secondSelect: "",
    thirdSelect: "",
    fifthSelect: "",
    sixSelect: "",
    sevenSelect: "",
};

export interface Posts {
    id: number,
    name:  string,
}

export interface State {
    firstSelect?: "" | Posts,
    secondSelect?: "" | Posts,
    thirdSelect?: "" | Posts,
    fifthSelect?: "" | Posts,
    sixSelect?: "" | Posts,
    sevenSelect?: "" | Posts,
}