'use client'

import Image from 'next/image'

import styles from './nav.module.css'
import { ParentNav, MainNav, ImageLink, SubNav, Div, NavLink } from "./navstyle";
import Button from '../Button'

import NavImage from '../../../public/assets/62d6709cf8832cfd1775bf4e_salescaptainfull.webp'

const Nav = () => {
    return (
        <MainNav>
            <ParentNav>
                <ImageLink href='/'>
                    <Image
                        className={styles.navimage}
                        src={NavImage}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </ImageLink>
                <SubNav>
                    <Div>
                        Product
                    </Div>
                    <Div>
                        Solution
                    </Div>
                    <NavLink href='/'>Pricing</NavLink>
                    <NavLink href='/'>Resources</NavLink>
                    <NavLink href='/'>Support</NavLink>
                    <Button name='Sign in'/>
                    <Button name='Get started'/>
                </SubNav>
            </ParentNav>
        </MainNav>
    );
}

export default Nav;