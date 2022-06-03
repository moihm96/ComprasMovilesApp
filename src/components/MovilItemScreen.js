import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { useFetch } from '../hooks/useFetch';

import { Selector } from './Selector';

export function MovilItemScreen() {
    const { numCompras, setNumCompras } = useContext(AppContext);
    const { movilId } = useParams();
    const { loading, data } = useFetch(`https://front-test-api.herokuapp.com/api/product/${movilId}`);

    const [colorCodigo, setColorCodigo] = useState('');
    const [almacenCodigo, setAlmacenCodigo] = useState('');
    const onClick = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: data.id,
                colorCode: colorCodigo,
                storageCode: almacenCodigo,
            }),
        };
        fetch('https://front-test-api.herokuapp.com/api/cart', requestOptions)
            .then((response) => response.json())
            .then((dato) => { if (dato) setNumCompras(parseInt(numCompras) + dato.count); });
    };

    return (
        <div>

            {
                loading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <div style={{ padding: '2%' }}>
                            <div className="row mt-5">
                                <div className="col-4">
                                    <img
                                        src={data.imgUrl}
                                        alt={data.model}
                                        width="70%"
                                        className="img-thumbnail animate__animated animate__fadeInLeft"
                                    />
                                </div>

                                <div className="col-8 animate__animated animate__fadeIn">
                                    <h3>
                                        {data.brand}
                                        {' '}
                                        {data.model}
                                    </h3>
                                    <ul className="list-group list-group-flush">
                                        {data.price ? (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Precio: </b>
                                                {' '}
                                                {data.price}
                                                {' '}
                                                $
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Precio: </b>
                                                {' '}
                                                No disponible
                                            </li>
                                        )}
                                        {data.cpu ? (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>CPU: </b>
                                                {' '}
                                                {data.cpu}
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>CPU: </b>
                                                {' '}
                                                No disponible
                                            </li>
                                        )}
                                        {data.ram ? (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>RAM: </b>
                                                {' '}
                                                {data.ram}
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>RAM: </b>
                                                {' '}
                                                No disponible
                                            </li>
                                        )}
                                        {data.os ? (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Sistema Operativo: </b>
                                                {' '}
                                                {data.os}
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Sistema Operativo: </b>
                                                {' '}
                                                No disponible
                                            </li>
                                        )}
                                        {data.displayResolution ? (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Resolución de pantalla: </b>
                                                {' '}
                                                {data.displayResolution}
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Resolución de pantalla: </b>
                                                {' '}
                                                No disponible
                                            </li>
                                        )}
                                        {data.battery ? (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Batería: </b>
                                                {' '}
                                                {data.battery}
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Batería: </b>
                                                {' '}
                                                No disponible
                                            </li>
                                        )}
                                        {data.primaryCamera ? (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Cámara principal: </b>
                                                {' '}
                                                {data.primaryCamera}
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Cámara principal: </b>
                                                {' '}
                                                No disponible
                                            </li>
                                        )}
                                        {data.secondaryCmera ? (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Cámara secundaria: </b>
                                                {' '}
                                                {data.secondaryCmera}
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Cámara secundaria: </b>
                                                {' '}
                                                No disponible
                                            </li>
                                        )}
                                        {data.dimentions ? (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Dimensiones: </b>
                                                {' '}
                                                {data.dimentions}
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Dimensiones: </b>
                                                {' '}
                                                No disponible
                                            </li>
                                        )}
                                        {data.weight ? (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Peso: </b>
                                                {' '}
                                                {data.weight}
                                                {' '}
                                                gramos
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                {' '}
                                                <b>Peso: </b>
                                                {' '}
                                                No disponible
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <div className="col-4" style={{ display: 'flex' }}>
                                <label style={{ padding: '3.5%' }}>Almacenamiento: </label>
                                <Selector
                                    optionsR={data.options.storages}
                                    setCodigo={setAlmacenCodigo}
                                />
                            </div>
                            <div className="col-4" style={{ display: 'flex' }}>
                                <label style={{ padding: '3.5%' }}>Color: </label>
                                <Selector
                                    optionsR={data.options.colors}
                                    setCodigo={setColorCodigo}
                                />
                            </div>

                            <button className="btn btn-outline-info" onClick={onClick}> Añadir a compra </button>
                            <button style={{ marginLeft: '1.5%' }} className="btn btn-outline-info">
                                {' '}
                                <Link to="/">Volver a página principal</Link>
                                {' '}
                            </button>
                        </div>
                    )
            }
        </div>
    );
}
