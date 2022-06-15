import React, { useState } from 'react';

import './MovilList.css';

import { ItemCard } from '../../components/Item/ItemCard';
import { useFetch } from '../../hooks/useFetch';
import { URL } from '../../helper/ApiURLs';

export const MovilList = () => {
    const { loading, data } = useFetch(`${URL}/product`);

    const [searchText, setSearchText] = useState('');
    const [searchParam] = useState(['brand', 'model']);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const search = (items) => items.filter((item) => searchParam.some((newItem) => (
        item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchText.toLowerCase()) > -1
    )));

    return (
        <div className='movil-container'>
            <input
                type="text"
                placeholder="Buscar un móvil"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
            />
            {loading
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                (
                    <div className="row rows-cols-1 row-cols-md-4 g-4">
                        {
                            search(data).map((movil) => (
                                <ItemCard key={movil.id} item={movil} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
