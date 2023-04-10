export const formsObject = {
    firstSelect: "",
    secondSelect: ""
};

export interface Posts {
    id: number,
    name:  string,
}

export interface State {
    firstSelect?: "" | Posts,
    secondSelect?: "" | Posts
}