import Link from 'next/link'
import styled from 'styled-components'

export const DivContent = styled.div`
    width: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    border-bottom: 0 solid rgba(0,0,0,.08);
    padding: 1em 1em 2em;
    .p1{
        text-align: center;
        margin-top: 2em;
        margin-bottom: 4em;
        padding-top: 0.125em;
        padding-left: 0.5em;
        padding-right: 0.5em;
        font-size: 1em;
        line-height: 1.5em;
    }
    .h{
        margin-top: 0.5em;
        margin-bottom: 0;
        padding-top: 0;
        font-size: 5em;
        font-weight: 600;
        line-height: 1em;
        text-align: center;
    }
    .p2{
        color: #333;
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 0;
        font-size: 1.3em;
        font-weight: 400;
        line-height: 1.2em;
        text-align: center;
    }
    .use-product{
        margin-top: 4em;
        margin: 4em 0.5em 0.5em;
        font-size: 1em;
        font-weight: 600;
        line-height: 1.5em;
    }
    h5{
        margin-top: 4em;
        margin: 4em 0.5em 0.5em;
        font-size: 1em;
        font-weight: 600;
        line-height: 1.5em;
    }
`

export const Head = styled.div`
    margin-left: -10px;
    margin-right: -10px;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    .head-img{
        padding-left: 0;
        padding-right: 0;
        position: static;
        width: 33.3333%;
        float: left;
        min-height: 1px;
    }
    h4{
        margin-top: 0.5em;
        margin-bottom: 0;
        margin-left: 0;
        font-family: Avertastd,sans-serif;
        font-size: 1.3em;
        font-weight: 600;
        line-height: 1.3em;
        display: inline-block;
    }
    p{
        color: rgba(51,51,51,.7);
        margin-top: 0.25em;
        margin-bottom: 0;
        padding-top: 0;
        font-family: Avertastd,sans-serif;
        font-size: .8em;
        font-weight: 300;
        line-height: 1.2em;
        display: block;
    }
    .img{
        width: 4.5em;
        height: 4.5em;
        max-width: 76em;
        float: left;
        margin-left: 1.5em;
    }
`

export const ProductLink = styled(Link)`
    background-color: #d8f7ff;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    margin-right: 0.25em;
    padding: 0.25em 1em;
    font-size: .9em;
    color: #2c2c2c;
    border-radius: 15px;
    font-weight: 400;
    text-decoration: none;
    display: inline-block;

`

export const ToolCard = styled.div`
    grid-area: span 1/span 1/span 1/span 1;
    border-color: rgba(0,0,0,.1);
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 26px;
    padding: 0.6em;
    h3{
        text-align: left;
        margin-bottom: 0;
        margin-left: 0;
        padding-left: 16px;
        transition: opacity .2s;
        color: #285fca;
        margin-top: 0.5em;
        font-size: 2em;
        font-weight: 400;
        line-height: 1em;
    }
    p{
        text-align: left;
        margin: 0.75em auto 2em;
        padding-top: 0;
        padding-left: 16px;
        line-height: .6em;
        padding-bottom: 0;
        font-weight: 300;
        color: rgba(51,51,51,.7);
    }
`

export const TableDiv = styled.div`
    transform: translate(0);
    padding: 0 10px;
`

export const SingleDiv = styled.div`
    border-bottom: 1px solid rgba(0,0,0,.06);
    align-items: flex-end;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-bottom: 30px;
    display: flex;
    font-size: 1em;
    line-height: 1em;
    .contents{
        font-size: 16px;
        display: block;
    }
    .img{
        margin-top: 4px;
        margin-right: 16px;
        max-width: 100%;
        vertical-align: middle;
        display: inline-block;
        border: 0;
    }
    .heading{
        align-items: center;
        margin-top: 0.9em;
        margin-bottom: auto;
        font-size: 1.6em;
        display: flex;
        font-weight: 700;
        line-height: 1.3em;
        color: #000;
        text-align: justify;
    }
    .para{
        margin-top: 3px;
        font-size: .8em;
        line-height: 1em;
        color: rgba(51,51,51,.8);
        font-weight: 300;
        display: block;
    }
`

export const ExampleDiv = styled.div`
    grid-area: span 1/span 1/span 1/span 1;
    border: 0 solid rgba(255,255,255,.1);
    border-radius: 8px;
    box-shadow: 3px 3px 8px rgba(0,0,0,.08);
    text-align: center;
    text-decoration: none;
`

export const DataLink = styled(Link)`
    background-color: rgba(255,255,255,0);
    border-bottom-width: 0;
    border: 0.5px solid #d2d9dd;
    padding-top: 27px;
    padding-bottom: 27px;
    text-decoration: none;
    transition: all .15s ease-in-out,opacity .2s;
    border-radius: 6px;
    padding: 17px 16px;
    display: block;
    max-width: 100%;
    text-align: center;
    font-size: 20px;
    line-height: 27px;
    .img-example{
        width: 3em;
        height: auto;
        color: #285fca;
        max-width: 100%;
        vertical-align: middle;
        display: inline-block;
        border: 0;
        overflow-clip-margin: content-box;
        overflow: clip;
    }
    .h4-example{
        color: #000;
        font-size: 1.1em;
        margin-top: 1em;
        font-style: normal;
        font-weight: 600;
        line-height: 1em;
        text-decoration: none;
        margin-bottom: 10px;
        display: block;
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
`
    