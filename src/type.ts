export const formsObject = {
    firstSelect: "",
    firstInput: "",
    secondSelect: "",
    thirdSelect: "",
    fifthSelect: "",
    sixSelect: "",
    secondInput: "",
    sevenSelect: "",
};

export interface Posts {
    id: number,
    name:  string,
}

export interface State {
    firstSelect?: "" | Posts,
    firstInput?: "" | Posts,
    secondSelect?: "" | Posts,
    thirdSelect?: "" | Posts,
    fifthSelect?: "" | Posts,
    sixSelect?: "" | Posts,
    secondInput?: "" | Posts,
    sevenSelect?: "" | Posts,
}