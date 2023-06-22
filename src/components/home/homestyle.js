import styled from 'styled-components'
import Link from 'next/link'

export const MainPage = styled.div`
    text-align: center;
    background-color: #fff;
    margin: 4.6em auto 0;
    padding-top: 1em;
    padding-bottom: 1em;
    .section1 h2{
        margin-bottom: 1em;
        font-size: 2.4em;
        line-height: 2.4em;
        color: #000;
        margin-top: 1.8em;
        font-weight: 700;
        text-align: center;
    }
    .section2{
        margin-top: 2em;
        padding-top: 2em;
        padding-bottom: 2em;
        font-size: 1em;
        line-height: 1em;
        overflow: hidden;
    }
    .cardsection{
        max-width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
    .section3{
        margin-top: 0;
        border: 2px #b4abab;
        border-radius: 5px;
        margin-bottom: 80px;
    }
`

export const TitlePage = styled.div`
    max-width: 93%;
    margin-top: 2.5em;
    margin-bottom: 2em;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
    h1{
        margin: 0.7em 3.2em;
        color: #181818;
        text-align: center;
        margin: 1em 2em 0.6em;
        font-size: 4.3em;
        font-weight: 700;
        line-height: 1.1em;
    }
    .description{
        font-size: 1.3em;
        color: rgba(51,51,51,.61);
        text-align: center;
        margin-left: 8em;
        margin-right: 8em;
        font-weight: 300;
        line-height: 1.5em;
    }
    .form{
        max-width: 58%;
        margin-top: 2em;
        margin-bottom: 0.125em;
        font-size: 100%;
        line-height: 100%;
        float: none;
        clear: none;
        text-align: center;
        object-fit: fill;
        margin: 2em auto 0.125em;
    }
`

export const CardLayout = styled.div`
    grid-column-gap: 23px;
    max-width: 98%;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    grid-auto-columns: 1fr;
    display: grid;
`

export const NextLevelLayout = styled.div`
    max-width: 93%;
    grid-column-gap: 23px;
    margin-left: auto;
    margin-right: auto;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1.8em;
    grid-auto-columns: 1fr;
    display: grid;
`

export const SalesCaptain = styled.div`
    max-width: 1265px;
    margin-top: 0;
    padding-top: 1.8em;
    border: 1px #000;
    display: block;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 20px;
    line-height: 27px;
    h2{
        font-size: 1em;
        line-height: 1em;
        color: #000;
        text-align: center;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 1em;
        font-weight: 700; 
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px; 
    }
    strong{
        font-size: 1.8em;
        line-height: 2.2em;
        font-weight: 700;
        color: #000;
        text-align: center;
    }
    p{
        color: rgba(51,51,51,.6);
        text-align: center;
        margin-bottom: 80px;
        padding-top: 0;
        font-family: Avertastd,sans-serif;
        font-size: 1.2em;
        line-height: 1.52em;
    }
`

export const Examples = styled.div`
    max-width: none;
    grid-column-gap: 23px;
    grid-row-gap: 23px;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    align-items: center;
    justify-items: stretch;
    margin: 2.5em auto 0;
    text-decoration: none;
    grid-auto-columns: 1fr;
    display: grid;
    font-size: 20px;
    line-height: 27px;
`

export const Discovery = styled.div`
    margin-bottom: 121px;
    padding-top: 0;
    margin-top: 1.8em;
    display: block;
    h2{
        font-size: 1em;
        line-height: 1em;
        color: #000;
        text-align: center;
        margin-top: 0;
        margin-bottom: 0;
        font-family: Gilroy;
        font-weight: 700;
        display: block;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    strong{
        font-size: 2.8em;
        line-height: 2.2em;
        font-weight: 700;
    }
`

export const Customers = styled.div`
    height: 5%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    .img-customer{
        grid-area: span 1/span 1/span 1/span 1;
        justify-self: center;
        max-width: 65%;
        vertical-align: middle;
        display: inline-block;
        border: 0;
        overflow-clip-margin: content-box;
         overflow: clip;
    }
    .grid-view{
        grid-row-gap: 121px;
        grid-template-rows: auto auto auto auto;
        margin-top: 80px;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr;
        display: grid;
    }
    .view-1{
        grid-area: span 1/span 1/span 1/span 1;
        align-self: center;
        justify-self: center;
        margin-left: 2em;
        margin-right: 4em;
        display: block;
        position: static;
        text-align: left;
    }
    .view-2{
        text-align: left;
    }
    h2{
        font-size: 2em;
        line-height: 1.1em;
        color: #000;
        text-align: left;
        margin-bottom: 0.8em;
        font-family: Avertastd,sans-serif;
        font-weight: 700;
        margin-top: 0;
        display: block;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    p{
        font-weight: 400;
        color: #555;
        margin-top: 1em;
        margin-bottom: 1em;
        padding-top: 0;
        font-size: 1.2em;
        line-height: 1.4em;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        text-align: left;
    }
`

export const Button = styled(Link)`
    font-size: 1.1em;
    color: #285fca;
    font-weight: 600;
    line-height: 1em;
    text-decoration: none;
    background-color: transparent;
`