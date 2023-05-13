export const formsObject = {
    firstSelect: null,
    firstInput: "",
    secondSelect: null,
    thirdSelect: null,
    fifthSelect: null,
    sixSelect: null,
    secondInput: "",
    sevenSelect: null,
};

export const secondFormsObject = {
    firstSelect: null,
    secondSelect: null,
    thirdSelect: null,
    fifthSelect: null,
};

export interface Post {
    id: number,
    name:  string,
}

export interface State {
    firstSelect: null | Post,
    firstInput: string,
    secondSelect: null | Post,
    thirdSelect: null | Post,
    fifthSelect: null | Post,
    sixSelect: null | Post,
    secondInput: string,
    sevenSelect: null | Post,
}

export interface SecondState {
    firstSelect: null | Post,
    secondSelect: null | Post,
    thirdSelect: null | Post,
    fifthSelect: null | Post,
}