import { AsyncSelect } from "../../shared/AsyncSelect";
// @ts-ignore
import qs from 'qs';
import {Input} from "../../shared/Input";
import {State} from "../../type";

export const filters = [
    {
        name: 'firstSelect',
        component: (props: any) => (
            <AsyncSelect
                {...props}
                placeholder="first"
                url='countries'
                className="selectContainer"
                key={props.url}
            />
        ),
    },
    {
        name: "firstInput",
        component: (props: any) => (
            <Input
                {...props}
                className="inputContainer"
                key={props.state.firstInput.event}
            />
        ),
    },
    {
        name: 'secondSelect',
        getUrl: (firstSelectId?: State) => firstSelectId ? `cities?${qs.stringify({ countryId: firstSelectId })}` : 'cities',
        component: (props: any) => (
            <AsyncSelect
                {...props}
                placeholder="second"
                className="selectContainer"
                key={props.url}
            />
        ),
    },
    {
        name: "thirdSelect",
        getUrl: (firstSelectId?: State) => firstSelectId ? `avatar?${qs.stringify({ countryId: firstSelectId })}` : 'avatar',
        component: (props: any) => (
            <AsyncSelect
                {...props}
                placeholder="third"
                className="selectContainer"
                key={props.url}
            />
        ),
    },
    {
        name: "fifthSelect",
        component: (props: any) => (
            <AsyncSelect
                {...props}
                placeholder="fifth"
                url='currency'
                className="selectContainer"
                key={props.url}
            />
        ),
    },
    {
        name: "sixSelect",
        component: (props: any) => (
            <AsyncSelect
                {...props}
                placeholder="six"
                url='brands'
                className="selectContainer"
                key={props.url}
            />
        ),
    },
    {
        name: "secondInput",
        component: (props: any) => (
            <Input
                {...props}
                className="inputContainer"
                key={props.state.secondInput.event}
            />
        ),
    },
    {
        name: "sevenSelect",
        component: (props: any) => (
            <AsyncSelect
                {...props}
                placeholder="seven"
                url='language'
                className="selectContainer"
                key={props.url}
            />
        ),
    },
]