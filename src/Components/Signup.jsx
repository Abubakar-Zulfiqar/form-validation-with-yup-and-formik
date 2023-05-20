import { Button, Form, Container } from 'react-bootstrap'
import { useFormik } from 'formik'

import { signUpSchema } from '../Schema/UserSchema'

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password: ''
}

const Signup = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        }
    })

    return (
        <>
            <Container>
                <Form className='mt-5' onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter Name'
                            name='name'
                            required
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name && touched.name ?
                            <p style={{ color: 'red' }}>{errors.name}</p> : null}
                    </Form.Group>
                    <Form.Group className='mb-3' >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            name='email'
                            required
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email ?
                            <p style={{ color: 'red' }}>{errors.email}</p> : null}
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            autoComplete='off'
                            name='password'
                            required
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password ?
                            <p style={{ color: 'red' }}>{errors.password}</p> : null}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirm Password'
                            autoComplete='off'
                            name='confirm_password'
                            required
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.confirm_password && touched.confirm_password ?
                            <p style={{ color: 'red' }}>{errors.confirm_password}</p> : null}
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Signup 