import { AsyncSelect } from "../../shared/AsyncSelect";
import {Input} from "../../shared/Input";
// @ts-ignore
import qs from 'qs';

export const filters = [
    {
        component: (props: any) => <AsyncSelect {...props} />,
        name: "firstSelect",
        placeholder: 'first',
        getUrl: () => 'countries',
        className: 'selectContainer',
    },
    {
        component: (props: any) => <Input key={props.state.firstSelect.event} {...props} />,
        name: "firstInput",
        className: 'inputContainer',
    },
    {
        component: (props: any) => <AsyncSelect key={props.state.firstSelect.id} {...props} />,
        name: "secondSelect",
        placeholder: 'second',
        getUrl: (firstSelectId: number) => (
            `cities?${qs.stringify({ countryId: firstSelectId })}`
        ) ,
        className: 'selectContainer',
    },
    {
        component: (props: any) => <AsyncSelect key={props.state.secondSelect.id} {...props} />,
        name: "thirdSelect",
        placeholder: 'third',
        getUrl: (firstSelectId: number) => (
            `avatar?${qs.stringify({ countryId: firstSelectId })}`
        ) ,
        className: 'selectContainer',
    },
    {
        component: (props: any) => <AsyncSelect {...props} />,
        name: "fifthSelect",
        placeholder: 'fifth',
        getUrl: () => 'currency',
        className: 'selectContainer',
    },
    {
        component: (props: any) => <AsyncSelect {...props} />,
        name: "sixSelect",
        placeholder: 'six',
        getUrl: () => 'brands',
        className: 'selectContainer',
    },
    {
        component: (props: any) => <Input key={props.state.secondInput.event} {...props} />,
        name: 'secondInput',
        className: 'inputContainer',
    },
    {
        component: (props: any) => <AsyncSelect {...props} />,
        name: "sevenSelect",
        placeholder: 'seven',
        getUrl: () => 'language',
        className: 'selectContainer',
    },
]