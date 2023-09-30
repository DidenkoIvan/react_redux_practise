import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 
 
function FormUserInfo() {
    const initialValues = {
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        mobile: '',
      };
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required("this field is required")
            .matches(/^[^0-9]*$/, 'First name can`t contain number'),
        lastName: Yup.string()
            .required("this field is required")
            .matches(/^[^0-9]*$/, 'Last name can`t contain number'),
        age: Yup.number()
          .required("this field is required")
          .positive("Age must be a positive number")
          .integer("Age must be an integer"),
        address: Yup.string().required("this field is required"),
        mobile: Yup.string()
          .required("this field is required")
          .matches(/^[0-9]{10}$/, "The phone number must contain 10 digits"),
      });

      const handleSubmit = (values, actions) => {
        const purchasedItems = localStorage.getItem("cart");
        console.log('Придбані товари:', purchasedItems);
        
        console.log('Інформація про користувача:', values);
        actions.resetForm()
      };
       
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
                    <Form className='form'>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" id="firstName" name="firstName" />
                            <ErrorMessage name="firstName" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" id="lastName" name="lastName" />
                            <ErrorMessage name="lastName" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="age">Age</label>
                            <Field type="number" id="age" name="age" />
                            <ErrorMessage name="age" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="address">Shipping address</label>
                            <Field type="text" id="address" name="address" />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="mobile">Phone</label>
                            <Field type="text" id="mobile" name="mobile" />
                            <ErrorMessage name="mobile" component="div" className="error" />
                        </div>
                        <div>
                            <button type="submit">Checkout</button>
                        </div>
                    </Form>
                </Formik>
    )
}

export default FormUserInfo;