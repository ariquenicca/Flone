import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartCount } from "../../redux/cart";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import { ActionAnchor } from "./Cart.style";

function CartItem({ data }) {
    const [itemCount, setItemCount] = useState(data.count);
    const dispatch = useDispatch();
    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(removeFromCart(data.id));
    };
    const handleChange = (e) => {
        let value = e.target.value;
        if (value < 1) value = 1;
        setItemCount(value);
        if (value && value != "0") {
            dispatch(updateCartCount({ id: data.id, value: value }));
        }
    };
    return (
        <tr key={data.id}>
            <td>
                <img src={data.imageUrl} alt="" />
            </td>
            <td>{data.title}</td>
            <td>{data.originalPrice}</td>
            <td>
                <TextField
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                            min: 1,
                        },
                    }}
                    value={itemCount}
                    onChange={handleChange}
                />
            </td>
            <td>{itemCount * data.originalPrice}</td>
            <td>
                <ActionAnchor href="">
                    <EditIcon fontSize="small" />
                </ActionAnchor>
                <ActionAnchor href="" onClick={handleRemove}>
                    <CloseIcon fontSize="small" />
                </ActionAnchor>
            </td>
        </tr>
    );
}

export default CartItem;
