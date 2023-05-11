import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from './Rhf.module.scss'

type Inputs = {
    firstName: string,
    lastName: string,
    age: number,
};

const schema = yup.object({
    firstName: yup.string().required('Обязательное поле').max(20, 'Максимальное количество символов не может быть больше 20'),
    lastName: yup.string().required('Обязательное поле'),
    age: yup.number().required('Обязательное поле').min(18, 'Не может быть менее 18').max(90, 'Не может быть больше 90'),
}).required();

export default function TrainingReactHookForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    // console.log('@@@watch', watch("firstName"))
    // console.log('@@@watch', watch('lastName'))
    // console.log('@@@watch', watch('age'))

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.input} {...register("firstName", { required: true, maxLength: 20 })} />
            <p>{errors.firstName?.message}</p>

            <input className={styles.input} {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <p>{errors.lastName?.message}</p>

            <input className={styles.input} defaultValue="age" type="number" {...register("age", { min: 18, max: 99 })} />
            <p>{errors.age?.message}</p>

            <input className={styles.input} type="submit" />
        </form>
    );
}