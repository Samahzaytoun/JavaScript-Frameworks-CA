// create home page components
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './item.css';
import { ItemContext } from '../state/ItemContext';


const Item = ({ item ,index }) => {
    const { shopItems, addItem, removeItem } = useContext(ItemContext);

    return (
        <div className="col-4 mb-3">
            <div className="card text-black">
                <img src={item?.imageUrl}
                    className="card-img-top" alt="Apple Computer" />
                <div className="card-body">
                    <div className="text-center">
                        <h5 className="card-title">{item?.title}</h5>
                        <p className="text-muted mb-4">{item?.description?.length > 25 ? item?.description?.slice(0, 25) + ' >' : item?.description}</p>
                    </div>
                    <div>
                        <div className="d-flex flex-wrap justify-content-center">
                            {
                                item?.tags?.map((item, index) => (
                                    <span key={index} className="text-success me-1">#{item}</span>
                                ))
                            }
                        </div>
                        <hr />

                        {
                            item?.discountedPrice < item?.price ? (
                                <div>
                                    <div className="d-flex justify-content-between" style={{
                                        fontSize: '12px',
                                        color: 'red',
                                        textDecoration: 'line-through'
                                    }}>
                                        <span>Orginal Price</span><span>${item?.price}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span><h2>Now</h2></span><span><h2>${item?.discountedPrice}</h2></span>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="d-flex justify-content-between invisible" style={{
                                        fontSize: '12px',
                                        color: 'red',
                                        textDecoration: 'line-through'
                                    }}>
                                        <span>Orginal Price</span><span>${item?.price}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span><h2>Now</h2></span><span><h2>${item?.price}</h2></span>
                                    </div>
                                </div>
                            )
                        }

                    </div>

                    <div className="d-flex justify-content-between total font-weight-bold mt-4">
                        {/* Detail Button */}
                        <Link to={`/item/${item?.id}`} className="btn btn-warning btn-sm">Show</Link>
                        {/* add to cart */}
                        <button className={
                            shopItems.find((i) => i.id === item.id) ? 'btn btn-danger btn-sm' : 'btn btn-primary btn-sm'
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
        </div>
    );
};

export default Item;