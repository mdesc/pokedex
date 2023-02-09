import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { convertPoundsToKilograms } from '../Pokemon.service';

function DetailPage() {

    let { id } = useParams();

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
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
                    <h4 color='red'>{data.name.toUpperCase()}</h4>
                    <p>
                        Default form:
                        <img src={data.sprites.front_default} alt="Pokemon sprites" />
                        <img src={data.sprites.back_default} alt="Pokemon sprites" />
                    </p>
                    <p>
                        Shiny form:
                        <img src={data.sprites.front_shiny} alt="Pokemon sprites" />
                        <img src={data.sprites.back_shiny} alt="Pokemon sprites" />

                    </p>

                    <p>
                        Type(s):
                        {data.types.map((item, index) => {
                            return <li key={index}><a href={'https://pokeapi.co/api/v2/type/' + data.types[index].type.name}> {data.types[index].type.name}</a></li>
                        })}
                    </p>

                    weight : {convertPoundsToKilograms(data.weight)}kg

                </div>
                : <div>...</div>}
        </div>
    );
}

export default DetailPage;
