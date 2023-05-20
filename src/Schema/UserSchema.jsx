import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    name: Yup.string().min(5).max(25).required('Please enter your name')
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().min(8).max(20).required('Please enter your email'),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], 'Password must match')
})