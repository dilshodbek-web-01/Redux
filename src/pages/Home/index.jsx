import React from 'react';
import "./style.scss";
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { SET_TITLE, SET_PRICE, SET_PRODUCT, CLEAR_INPUT } from '../../action';

const index = () => {

    const { title, price, num, product } = useSelector((state) => state);
    const dispatch = useDispatch();

    const newProduct = {
        id: uuidv4(),
        title: title,
        price: price,
    }

    return (
        <>
            <div>
                <div className="card w-50 mx-auto p-5 mt-5">
                    <input
                        type="text"
                        className="form-control p-3 my-3"
                        placeholder="enter product title"
                        value={title}
                        onChange={(e) => dispatch(SET_TITLE(e.target.value))}
                    />
                    <input
                        type="number"
                        className="form-control p-3 my-3"
                        placeholder="enter product price"
                        value={price}
                        onChange={(e) => dispatch(SET_PRICE(e.target.value))}
                    />
                    <button
                        className="btn btn-success my-3" onClick={() => {
                            dispatch(SET_PRODUCT(newProduct));
                            dispatch(CLEAR_INPUT());
                        }}>
                        Add product
                    </button>
                </div>

                <div className="card w-50 mt-5 mx-auto p-4">
                    <ul className="list-group">
                        {
                            product.map((el) => {
                                return <li key={el.id} className="list-group-item">
                                    {el.title} {el.price} $
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>

        </>
    );
};

export default index;