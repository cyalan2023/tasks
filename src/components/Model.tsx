import React from 'react';
import {adidasArr} from "./pages/Adidas";
import {useParams} from "react-router-dom";
import {Error404} from "./pages/Error404";
import * as http2 from "http2";

export const Model = () => {
    const params = useParams()
    return (
        <div style={{textAlign: "center"}}>
            {adidasArr[Number(params.id)] ? <>
                <h2> {adidasArr[Number(params.id)].model}</h2>
                <h4>{adidasArr[Number(params.id)].collection}</h4>
                <h3>{adidasArr[Number(params.id)].price}</h3>
                <img src={adidasArr[Number(params.id)].picture}
                     alt={adidasArr[Number(params.id)].model}
                     style={{width: "600px", height: "auto", marginRight: "10px"}}/></>
                : <h2>Нет такой модели</h2>}

        </div>
    );
};

