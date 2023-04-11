import React, { useEffect, useState, useContext } from 'react';
import { ItemContext } from '../state/ItemContext';
import { Link } from 'react-router-dom';

// RiStarFill
import { RiStarFill } from 'react-icons/ri';

const MyItems = () => {
    const { shopItems, addItem, removeItem } = useContext(ItemContext);
    // total price with discount
    const totalPrice = shopItems.reduce((acc, item) => {
        return acc + (item?.discountedPrice < item?.price ? item?.discountedPrice : item?.price);
    }, 0);
    // total price without discount
    const totalPriceWithoutDiscount = shopItems.reduce((acc, item) => {
        return acc + item?.price;
    }, 0);
    return (
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-12 col-lg-8 ">
                    <div class="items d-flex flex-column">
                        {
                            shopItems.map((item, index) => (
                                <div class="card col-10 mb-4">
                                    <div class="row">
                                        <div class="col-md-2" style={{
                                            maxHeight: '100px',
                                        }}>
                                            <img src={item.imageUrl} alt="..." class="img-fluid img-responsive rounded" style={{
                                                maxHeight: '100px',
                                            }} />
                                        </div>
                                        <div class="col-md-6">
                                            <h5>{item?.title}</h5>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex">
                                                    {
                                                        [1, 2, 3, 4, 5].map((x, index) => (
                                                            <RiStarFill key={index} className={index < item?.rating ? 'text-warning' : 'text-secondary'} />
                                                        ))

                                                    }
                                                </div>
                                            </div>
                                            <p className="text-muted mb-4">{item?.description?.length > 25 ? item?.description?.slice(0, 25) + ' ..' : item?.description}</p>
                                        </div>
                                        <div class="align-items-center align-content-center col-md-3 pb-3" >
                                            <div class="d-flex flex-row align-items-center mt-3">
                                                {
                                                    item?.discountedPrice < item?.price ? (
                                                        <div>
                                                            <h4 class="">${item?.discountedPrice}</h4><span style={{
                                                                fontSize: '12px',
                                                                color: 'red',
                                                                textDecoration: 'line-through'
                                                            }}>${item?.price}</span>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <h4 class="mr-1">${item?.price}</h4>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <Link to={`/item/${item?.id}`} className="btn btn-warning btn-sm">Show</Link>
                                                <button class="btn btn-danger btn-sm" type="button" onClick={
                                                    (e) => {
                                                        removeItem(item);
                                                    }
                                                }>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
                <div class="col-md-12 col-lg-4">
                    <div class="summary">
                        <h3>Summary</h3>
                        <div class="summary-item"><span class="text">Subtotal : </span><span class="price">${totalPriceWithoutDiscount.toFixed(2)}</span></div>
                        <div class="summary-item"><span class="text">Discount : </span><span class="price">${(totalPriceWithoutDiscount -totalPrice).toFixed(2) }</span></div>
                        <div class="summary-item"><span class="text">Total : </span><span class="price">${totalPrice.toFixed(2)}</span></div>
                        <Link to="/pay" className="btn btn-success btn-block">Pay</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItems;