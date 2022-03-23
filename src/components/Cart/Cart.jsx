import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartTable, ButtonContainer, ButtonFlex } from "./Cart.style";
import CartItem from "./CartItem";
import { Button } from "../Button.style";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/cart";
import CartHeader from "../Header/CartHeader";
import { BreadCrumb } from "../BreadCrumb.style";
import { Container } from "../Container.style";
function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const handleClear = (e) => {
        e.preventDefault();
        dispatch(clearCart());
    };
    return (
        <div>
            <CartHeader />
            <BreadCrumb>
                <Link to="/">HOME</Link> / CART PAGE
            </BreadCrumb>
            <br />
            <br />

            {cartItems.length == 0 && (
                <Container>
                    <h1>No items in your cart</h1>
                    <br />
                    <br />
                </Container>
            )}

            <Container>
                {cartItems.length > 0 && (
                    <>
                        <h3>Your cart items</h3>
                        <br />
                        <CartTable>
                            <thead>
                                <tr>
                                    <th>IMAGE</th>
                                    <th align="center">PRODUCT NAME</th>
                                    <th align="center">UNIT PRICE</th>
                                    <th align="center">QTY</th>
                                    <th align="center">SUBTOTAL</th>
                                    <th align="center">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <CartItem data={item} key={item.id} />
                                ))}
                            </tbody>
                        </CartTable>
                        <br />
                        <ButtonContainer>
                            <ButtonFlex>
                                <Link to="/">
                                    <Button backgroundColor="#ddd" color="#222">
                                        CONTINUE SHOPPING
                                    </Button>
                                </Link>
                            </ButtonFlex>
                            <ButtonFlex textAlign="right">
                                <Button backgroundColor="#ddd" color="#222">
                                    UPDATE SHOPPING CART
                                </Button>
                                <Button
                                    backgroundColor="#ddd"
                                    color="#222"
                                    onClick={handleClear}
                                >
                                    CLEAR SHOPPING CART
                                </Button>
                            </ButtonFlex>
                        </ButtonContainer>
                        <br />
                    </>
                )}
            </Container>
        </div>
    );
}

export default Cart;
