import Link from "next/link";
import styled from 'styled-components'

const LoginButton = styled(Link)`
    color: #000;
    background-color: transparent;
    border: 2px solid #000;
    margin-left: 40px;
    margin-right: 8px;
    padding-top: 7px;
    padding-bottom: 7px;
    font-weight: 400;
    border-radius: 8px;
    margin-top: 16px;
    font-size: 15px;
    font-weight: 400;
    display: inline-block;
    padding: 9px 15px;
    text-decoration: non
`

const CreateButton = styled(Link)`
    background-color: #000;
    border: 2px solid #000;
    border-radius: 8px;
    margin-top: 16px;
    font-size: 15px;
    font-weight: 400;
    display: inline-block;
    border-radius: 8px;
    color: #fff;
    line-height: inherit;
    cursor: pointer;
    padding: 9px 15px;
`


const Button = ({name}) => {
    return (
        <>
            {name === 'Sign in' && <LoginButton href="/login">{name}</LoginButton>}
            {name === 'Get started' && <CreateButton href="/">{name}</CreateButton>}
        </>
    );
}

export default Button;