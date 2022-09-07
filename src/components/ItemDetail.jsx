import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const ItemDetail = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [beer, setBeers] = useState([]);


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.sampleapis.com/beers/ale/${id}`)
            .then(response => response.json())
            .then(beers => {
                setBeers(beers)
                setIsLoading(false);
            });
    }, [id])

    useEffect(() => {
        console.log(beer);
    }, [beer])

    return (
        <>
            {!isLoading && beer.rating !== null ? (
                <>
                    <img src={beer.image} alt="" />
                    <h1> {beer.name} </h1>
                    <h2> Precio por unidad: {beer.price} </h2>
                    {/*<h2> Reseñas positivas: {beer.rating.reviews} </h2>
                    <h2> Promedio de compra: {beer.rating.average.toFixed(2) * 10}% </h2>  */}
                </>
            ) : "Loading details"
            }
        </>
    )
}
