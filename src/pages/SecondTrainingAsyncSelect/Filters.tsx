import { AsyncSelect } from "../../shared/AsyncSelect";
// @ts-ignore
import qs from 'qs';
import {SecondState} from "../../type";

export const filters = [
    {
        name: 'firstSelect',
        component: (props: any) => (
            <AsyncSelect
                {...props}
                placeholder="first"
                url='car'
                className="selectContainer"
                key={props.url}
            />
        ),
    },
    {
        name: 'secondSelect',
        component: (props: any) => (
            <AsyncSelect
                {...props}
                placeholder="second"
                url='numberJobs'
                className="selectContainer"
                key={props.url}
            />
        ),
    },
    {
        name: "thirdSelect",
        getUrl: (state?: SecondState) => state?.firstSelect?.id ? `paint?${qs.stringify({ countryId: state.firstSelect.id })}` : 'paint',
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
        getUrl: (state?: SecondState) => state?.thirdSelect?.id ? `equipment?${qs.stringify({ countryId: state.thirdSelect.id })}` : 'equipment',
        component: (props: any) => (
            <AsyncSelect
                {...props}
                placeholder="fifth"
                className="selectContainer"
                key={props.url}
            />
        ),
    },
]