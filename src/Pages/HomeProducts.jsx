import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Item from './Item';
import { ItemContext } from '../state/ItemContext';

const HomeProducts = () => {
    const [items, setItems] = useState([]);
    const { recentSearch, addRecentSearch, removeRecentSearch } = useContext(ItemContext);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.noroff.dev/api/v1/online-shop');
            setItems(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='container'>
            <div className='mb-4 mt-4'>
                <h1>Online Shop</h1>
            </div>
            <div className="row">
                <div className='col-3' style={{
                    border: '1px solid transparent',
                    padding: '10px',
                    color: '#117964',
                    backgroundColor: '#e6f4f0',
                    borderRadius: '5px',
                    boxShadow: '0 0 10px #ccc',
                    height: '60vh',
                }} >
                    <h3>Search</h3>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onKeyDown={
                            (e) => {
                                if (e.key === 'Enter') {
                                    const value = e.target.value;
                                    if (value.length > 0 && value !== '') {
                                        addRecentSearch(value);
                                        const temp = items.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
                                        setItems(temp);
                                    } else {
                                        fetchData();
                                    }
                                    e.target.value = '';
                                }
                            }
                        } />

                    </div>
                    {/* section to recent search with delete icone */}
                    <div>
                        <hr />
                        <h5>Recent Search</h5>
                        <div className="d-flex">
                            <ul className="list-group" style={{
                                width: '100%',
                                overflowY: 'scroll',
                                height: '35vh',

                            }}>
                                {
                                    recentSearch.map((item, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                            {item}
                                            <button className="badge btn  btn-danger rounded-pill" onClick={
                                                (e) => {
                                                    removeRecentSearch(index);
                                                }
                                            }>X</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                    <div className="row">
                        {items.map((item, index) => (
                            <Item item={item} index={index} key={item?.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;