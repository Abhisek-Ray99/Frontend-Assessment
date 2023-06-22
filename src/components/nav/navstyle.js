import styled from 'styled-components'
import Link from "next/link";

export const MainNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(0,0,0,.06), 0 0 rgba(0,0,0,.13);
    line-height: 22px;
    z-index: 1000;
`

export const ParentNav = styled.div`
    max-width: 1340px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1000;
`

export const ImageLink = styled(Link)`
    max-width: 140px;
    margin-top: 21px;
    text-decoration: none;
    float: left;
`

export const SubNav = styled.nav`
    display: block;
    position: static;
    float: right;
`

export const Div = styled.div`
    max-width: 1340px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    cursor: pointer;
    padding: 20px;
`

export const NavLink = styled(Link)`
    max-width: 1340px;
    padding: 24px 20px 26px;
    font-size: 17px;
    font-weight: 400;
    transition: box-shadow .5s,color .3s;
    box-shadow: inset 0 3px transparent;
`