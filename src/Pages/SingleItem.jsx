import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './SingleItem.css'
import { ItemContext } from '../state/ItemContext';
// RiStarFill
import { RiStarFill } from 'react-icons/ri';

const SingleItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const { shopItems, addItem, removeItem } = useContext(ItemContext);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.noroff.dev/api/v1/online-shop/' + id);
            setItem(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();

    }, []);
    return (
        <div className='container row mt-4'>
            <div className="col-5">
                <div className="main-img">
                    <img src={item?.imageUrl} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="col-md-7">
                <div className="main-description px-2">
                    <div className="category text-bold text-secondary">
                        Tags:    {
                            item?.tags?.map((tag, index) => (
                                <span key={index} className="text-success"> #{tag} </span>
                            ))
                        }
                    </div>
                    <div className="product-title text-bold my-3">
                        {item?.title}
                    </div>


                    <div className="price-area my-4">
                        <p className="old-price mb-1"><del>${
                            item?.discountedPrice < item?.price ? item?.price : ''
                        }</del></p>
                        <p className="new-price text-bold mb-1">${
                            item?.discountedPrice < item?.price ? item?.discountedPrice : item?.price
                        }</p>
                        <div className="d-flex justify-content-between mb-2">
                            <div className="d-flex">
                                {
                                    [1, 2, 3, 4, 5].map((x, index) => (
                                        <RiStarFill key={index} className={index < item?.rating ? 'text-warning' : 'text-secondary'} />
                                    ))

                                }
                            </div>
                        </div>

                    </div>


                    <div className="buttons d-flex my-5">

                        <div className="block">

                            <button className={
                                shopItems.find((i) => i.id === item.id) ? 'shadow btn custom-del-btn ' : 'shadow btn custom-btn'
                            } onClick={
                                (e) => {
                                    shopItems.find((i) => i.id === item.id)
                                        ? removeItem(item)
                                        : addItem(item);
                                }
                            }>
                                {
                                    shopItems.find((i) => i.id === item.id) ? 'Remove' : 'Add to cart'
                                }
                            </button>
                        </div>

                    </div>




                </div>

                <div className="product-details my-4">
                    <p className="details-title text-color mb-1">Product Details</p>
                    <p className="description">
                        {item?.description}
                    </p>
                </div>




            </div>
        </div>
    );
};

export default SingleItem;