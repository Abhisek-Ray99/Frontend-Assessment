'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import bg from '/public/assets/loginSidePanel.6cc7d5c0ea3bc4deefac.jpeg'

const LoginDiv = styled.div`
    position: relative;
    width: 100vw;
    align-items: center;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    min-height: 100vh;
`

const LoginForm = styled.div`
    width: 50vw;
    align-items: center;
    justify-content: center;
    display: flex;
    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        gap: 20px;
    }
    .img-login{
        width: 200px;
        height: 100px;   
    }
    .form-section{
        margin-left: 30px;
        max-width: 305px;
    }
    .form-section input{
        font-family: sans-serif;
        height: 42px;
        width: 280px;
        background: #fff;
        border: 1px solid #cfcfcf;
        border-radius: 4px;
        box-sizing: border-box;
        color: #555;
        font-size: 14px;
        font-weight: 300;
        letter-spacing: .1px;
        margin-bottom: 10px;
        padding: 6px 35px 6px 12px
    }
    .form-section button{
        background-color: #1976d2;
        border: 0;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        margin: 15px 0 20px;
        text-align: center;
        transition: all .2s ease-in-out;
        font-family: sans-serif;
        height: 42px;
        width: 280px;
    }
    .fp{
        text-decoration: none;
        margin-left: -21px;
        margin-top: -5px;
        color: #1976d2;
        display: inline-block;
        font-family: sans-serif;
        line-height: normal;
    }
    h3{
        color: #212121;
        font-family: sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.5;
        margin: 0 0 27px;
    }

`

const FloatForm = styled.div`
    width: 50vw;
    background-color: antiquewhite;
    background-color: #f4f6f7;
    background-size: calc(60% - 340px);
    box-sizing: border-box;
    flex: 1 1;
    height: 100vh;
    width: 50vw;
    border-color: #e0e6ee;
    .banner-box{
        align-items: center;
        background-image: url(${bg.src});
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        height: 100%;
        justify-content: center;
        padding: 0;
        width: 100%;
    }
    .modal{
        background-color: #fff;
        border-radius: 6px;
        box-sizing: border-box;
        margin-top: 34px;
        max-width: 500px;
        padding: 30px;
        width: fit-content;
    }
    .mode{
        align-items: center;
        justify-content: center;
        display: flex;
        
    }
    .a{
        line-height: 50px;
        text-decoration: none;
        color: inherit;
    }
    button{
        background-color: #f57c00;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,.15);
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        font-family: sans-serif;
        font-size: 12px;
        font-weight: 600;
        height: 40px;
        letter-spacing: normal;
        line-height: 2;
        margin-top: 10px;
        padding: 10px;
        text-align: center;
        transition: background-color .2s ease-in-out;
    }
    h2{
        font-size: 2em;
        line-height: 1em;
        margin-bottom: 20px;
    }
`


const page = () => {
    return (
        <LoginDiv>
            <LoginForm>
                <div className='form'>
                    <Image alt="logic-img" src={require('/public/assets/loginLogo.3814067f45867b0a416c.png')} className='img-login'/>
                    <h3>
                        Login
                    </h3>
                    <div className='form-section'>
                        <input type='email' label="email" variant="outlined" placeholder='Email' />
                        <input type='password' label="password" variant="outlined" placeholder='Password' />
                        <button>
                            Sign In
                        </button>
                    </div>
                    <Link href="/" className="fp">Forgot Password</Link>
                </div>
            </LoginForm>
            <FloatForm>
                <div className='banner-box'>
                    <div className='modal'>
                        <h2>
                            Give your business a SalesCaptain Upgrade
                        </h2>
                        <p>
                            Our AI-powered tools help local businesses modernize how they communicate with their customers by facilitating online reviews, personalized marketing campaigns, web chats, payments, and more.
                        </p>
                        <p>
                            To learn more, talk to an expert today.
                        </p>
                        <div className='mode'>
                            <Link href='/' className='a' >
                                <button>Book an appointment</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </FloatForm>
        </LoginDiv>
    );
}

export default page;