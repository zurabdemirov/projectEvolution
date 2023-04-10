export const formsObject = {
    firstSelect: "",
    secondSelect: ""
};

export interface PostsType {
    id: number,
    name:  string,
    cities: {
        id: number,
        name: string
    }[]
}

export interface StateType {
    firstSelect?: "" | PostsType,
    secondSelect?: "" | PostsType
}