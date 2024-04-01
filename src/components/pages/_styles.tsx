import styled from "styled-components";
const Header =styled.div`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const Body = styled.div`
    display: flex;
`

const Nav = styled.div`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color:#282c34;
    font-size: 30px;

`

const Content = styled.div`
    background-color:#282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`

const Footer = styled.div`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`
const NavLink  = styled.div`
    text-decoration: none;
    color: #282c34;
`


const ActiveNavLink = styled.div`
    color: #7fb8f1;
    text-decoration: underline;
`

const NewWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: #1e3786;
    }

    & > a.active {
        text-decoration: none;
        color: #03eaff
    }

    & > a:hover {
        color: steelblue;
    }
`
export const S = {
    NewWrapper,
    Header,
    Body,
    Nav,
    Content,
    Footer,
    NavLink,
    ActiveNavLink
}
