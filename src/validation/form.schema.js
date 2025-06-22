import {z} from "zod/v4";
import * as Yup from 'yup';

//
// export const checkOutSchema = z.object({
//     firstName: z.string().min(2, {message: "form.validation.firstName.min"}).max(30),
//     lastName: z.string().min(2, {message: ""}).max(30),
//     // email: z.email().min(10),
//     //  companyName: z.string().min(3),
//     // adress: z.string()
// })

export const checkOutSchema =  Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    // email: Yup.string().email('Invalid email').required('Required'),
});