'use client'

import Image from "next/image"
import Input from "../Input";
import { MainPage, TitlePage, CardLayout, NextLevelLayout, SalesCaptain, Examples, Discovery, Customers, Button } from "./homestyle";
import styles from './home.module.css'
import SectionImage from '../../../public/assets/62b0e6fa4473cb712ba3b454_home-hero-agnostic-l-2x.webp'
import { images, members, toolsData, examples } from '@/data'
import ImageBox from "../ImageBox";
import Card from "../Card";
import ToolsCard from "../ToolsCard";
import ExamplesDiv from "../Examples";

const Home = () => {

    return (
        <MainPage>
            <TitlePage>
                <h1>Best way to grow your local business</h1>
                <div className="description">
                Artificial Intelligence powered easy-to-use tools to get more customers & give them a better experience
                </div>
                <div className="form">
                    <Input/>
                </div>
            </TitlePage>
            <Image
                className={styles.section2Image}
                src={SectionImage}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <section className="section1">
                <h2>Trusted by 100,000+ local businesses globally</h2>
                <div>
                {
                    images.map((image,index) => (
                        <ImageBox key={index} filePath={image} />
                    ))
                }
                </div>
            </section>
            <section className={styles.section2}>
                <div className={styles.cardsection}>
                    <CardLayout>
                        {
                            members.map((data,index) => (
                                <Card data={data} key={index} />
                            ))
                        }
                    </CardLayout>
                </div>
                <div className={styles.toolsSection}>
                    <h1 className={styles.hTools}>Tools to take your business to next level</h1>
                    <NextLevelLayout>
                        {
                            toolsData.map((data,index) => (
                                <ToolsCard data={data} key={index}/>
                            ))
                        }
                    </NextLevelLayout>
                </div>
            </section>
            <section className={styles.section3}>
                <SalesCaptain>
                    <h2>
                        <strong>SalesCaptain is designed for your business</strong>
                    </h2>
                    <p>Select your industry to see how it works</p>
                    <Examples>
                        {
                            examples.map((value,index) => (
                                <ExamplesDiv data={value} key={index} />
                            ))
                        }
                    </Examples>
                </SalesCaptain>
            </section>
            <Discovery>
                <h2>
                    <strong>Make your business stand out with us</strong>
                </h2>
                <Customers>
                        <div className="grid-view">
                            <div className="view-1">
                                <h2>
                                    Get discovered by
                                    <br/>
                                    more customers
                                </h2>
                                <div className="view-2">
                                    <p>
                                    <br/>
                                    Higher reviews & better listings make 
                                    you more discoverable to people
                                    <br/>
                                    organically
                                    </p>
                                </div>
                                <Button href='/' >Get started</Button>
                            </div>
                            <Image alt="imag1" src={require("/public/assets/customers/62cc453f2139195799ff1678_Mask Group 109.webp")}  className="img-customer"/>
                            <Image alt="imag1" src={require("/public/assets/customers/62dee8fb4ff877b8c4b92833_new111.webp")} className="img-customer"  />
                            <div className="view-1">
                                <h2>
                                    Get discovered by
                                    <br/>
                                    more customers
                                </h2>
                                <div className="view-2">
                                    <p>
                                    <br/>
                                    Higher reviews & better listings make 
                                    you more discoverable to people
                                    <br/>
                                    organically
                                    </p>
                                </div>
                                <Button href='/' >Get started</Button>
                            </div>
                            <div className="view-1">
                                <h2>
                                    Get discovered by
                                    <br/>
                                    more customers
                                </h2>
                                <div className="view-2">
                                    <p>
                                    <br/>
                                    Higher reviews & better listings make 
                                    you more discoverable to people
                                    <br/>
                                    organically
                                    </p>
                                </div>
                                <Button href='/' >Get started</Button>
                            </div>
                            <Image alt="imag1" src={require("/public/assets/customers/62dee8fba79d98b49f7812a5_new222.webp")} className="img-customer"  />
                            <Image alt="imag1" src={require("/public/assets/customers/62def85e197fa06b03e4005b_Group 18718.webp")} className="img-customer"  />
                            <div className="view-1">
                                <h2>
                                    Get discovered by
                                    <br/>
                                    more customers
                                </h2>
                                <div className="view-2">
                                    <p>
                                    <br/>
                                    Higher reviews & better listings make 
                                    you more discoverable to people
                                    <br/>
                                    organically
                                    </p>
                                </div>
                                <Button href='/' >Get started</Button>
                            </div>
    
                        </div>
                </Customers>
            </Discovery>
        </MainPage>
    );
}

export default Home;