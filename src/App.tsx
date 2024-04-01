import React, {useState} from 'react';
import {Adidas, adidasArr} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Route, Routes, Navigate, NavLink} from "react-router-dom"
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles"
import {Model} from "./components/Model";

const PATH = {
    PAGE1: "/adidas",
    PAGE2: "/puma",
    PAGE3: "/abibas",
    ERROR: "/error404",
    MODEL: "/adidass/",
} as const

function App() {
    return (
        <>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NewWrapper><NavLink to={PATH.PAGE1}>Adidas </NavLink></S.NewWrapper>
                    <S.NewWrapper><NavLink to={PATH.PAGE2}>Puma </NavLink></S.NewWrapper>
                    <S.NewWrapper><NavLink to={PATH.PAGE3}>Abibas </NavLink></S.NewWrapper>
                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/Adidas"}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path="/adidass/:id" element={<Model/>}/>

                        <Route path="/*" element={<Error404/>}/>
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </>
    );
}


export default App;

