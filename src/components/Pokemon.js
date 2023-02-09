import React, { useState, useEffect } from 'react';
import { convertPoundsToKilograms, getFirstAbility } from '../Pokemon.service';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Pokemon({ idPokemon }) {
    const [data, setData] = useState({});
    const [img, setImg] = useState();

    const fetchImage = async () => {
        const res = await fetch(data?.sprites?.front_default);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    const getPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPokemon();
    }, []);

    useEffect(() => {
        fetchImage();
    }, [data]);


    return (
        <div>
            {data.sprites && data.sprites.front_default ?
                <div>
                    <p>
                        <img src={data.sprites.front_default} />
                        <li>name :
                            <Router>
                                <Link reloadDocument to={`detailPage/${idPokemon}`}>
                                    {data.name}
                                </Link>
                            </Router>
                        </li>
                        <li>first ability : {getFirstAbility(data)}</li>
                        <li>weight : {convertPoundsToKilograms(data.weight)}kg</li>
                    </p>
                </div>
                : <div>...</div>}
        </div>



    );
}

export default Pokemon;
