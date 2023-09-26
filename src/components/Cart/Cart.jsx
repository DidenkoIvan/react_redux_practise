import React, { useState, useEffect } from 'react';
import "./Cart.scss";
import Button from '../Button/Button';
import ModalForm from '../Modal/Modal';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 

function Cart({ onSubmit }) {  
     
    const [cart, setCart] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [filteredList2, setFilteredList2] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const initialValues = {
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        mobile: '',
      };
    let totalPrice = 0;

    useState(() => {
        const allProd = JSON.parse(localStorage.getItem('products') || '[]');
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(savedCart);
        setAllProducts(allProd)
    }, []);

    useEffect(() => {
        const filteredList = allProducts.filter(item => cart.includes(item.article));
        setFilteredList2(filteredList);
    }, []);

    for (const product of filteredList2) {
        totalPrice += product.price;
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    function removeItem(indexToRemove) {
      
        setFilteredList2((prevItems) => {
            return prevItems.filter((item, index) => index !== indexToRemove);
        });
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("this field is required"),
        lastName: Yup.string().required("this field is required"),
        age: Yup.number()
          .required("this field is required")
          .positive("Age must be a positive number")
          .integer("Age must be an integer"),
        address: Yup.string().required("this field is required"),
        mobile: Yup.string()
          .required("this field is required")
          .matches(/^[0-9]{10}$/, "The phone number must contain 10 digits"),
      });

      const handleSubmit = (values) => {
        const purchasedItems = localStorage.getItem("cart");
        console.log('Придбані товари:', purchasedItems);
        
        console.log('Інформація про користувача:', values);
         
        onSubmit();
      };
    return (
        <>
        <Header />
            <div className="cart">
                <div className="cart__header">
                    <h2>Shopping Cart</h2>
                </div>
                <div className="cart__items">
                    <ol className="cart__items_list">
                        {filteredList2.map((item, index) => (
                            <li key={index}>
                                Article: {item.article}
                                Name: {item.name}
                                Price: {item.price}
                            <button className={"cart__delete-button"} onClick={() => {setIsModalOpen(true)}}> X </button>
                            <ModalForm
                                isOpen={isModalOpen}
                                header={"DELETE from CART"}
                                text={"Are you sure you want to delete this item from cart?"}
                                closeButton={closeModal}
                                action={<Button text="Nope" backgroundColor="pink" />}
                                actionOk={<Button text="Delete" backgroundColor="Green" onClick={() => {
                                    removeItem(index)
                                    closeModal() }}/>}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
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
                <div>
                    <p className='cart__totalPrice'>Total price: ${totalPrice}</p>
                    <p>Quantity of products: {filteredList2.length}</p>
                </div>
                <div className='buttons__container'>
                    <Button text="Clear cart" backgroundColor="red" onClick={() => {
                        // It`s temporarry solution below, will be changed soon 
                        window.location.reload();
                    }} />
                </div>
            </div>
            <Footer /> 
        </>
    )
}

export default Cart;

