
'use client'

import Image from "next/image";
import { DivContent, Head, ProductLink } from './style'
import './component.css'

const Card = ({data}) => {

    return (
        <div className="card">
            <DivContent>
                <Head>
                    <div className="head-img">
                        <Image src={data.picture} className="img" alt="data picture"/>
                    </div>
                    <div className="head-txt">
                        <h4>{data.name}</h4>
                        <p>{data.role}</p>
                    </div>
                </Head>
                <p className="p1">“{data.review}"</p>
                <h1 className="h">{data.percentage}</h1>
                <p className="p2">
                    {data.describe}
                </p>
                <div className="use-product">
                    <h5>Products used</h5>
                    {
                        data["Product used"].map((item,index) => (
                            <ProductLink href='/' key={index}>{item}</ProductLink>
                        ))
                    }
                </div>
            </DivContent>
        </div>
    );
}

export default Card;