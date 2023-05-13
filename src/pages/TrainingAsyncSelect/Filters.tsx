import { AsyncSelect } from "../../shared/AsyncSelect";
// @ts-ignore
import qs from 'qs';
import {Input} from "../../shared/Input";
import {SecondState} from "../../type";

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
        getUrl: (state?: SecondState) => state?.firstSelect?.id ? `cities?${qs.stringify({ countryId: state?.firstSelect?.id })}` : 'cities',
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
        getUrl: (state?: SecondState) => state?.secondSelect?.id ? `avatar?${qs.stringify({ countryId: state?.secondSelect?.id })}` : 'avatar',
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