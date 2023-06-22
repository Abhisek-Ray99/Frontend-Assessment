import styled from 'styled-components'

const Form = styled.form`
    max-width: 80%;
    font-size: 19px;
    flex-flow: row;
    justify-content: flex-start;
    margin: 1em auto 3em;
    display: flex;
`

const InputMail = styled.input.attrs({ type: 'email', placeholder: 'ENTER YOUR EMAIL' })`
    width: 100%;
    height: auto;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    font-size: 102%;
    line-height: 105%;
    display: block;
    color: #333;
    margin: 0 1em 0 0;
    padding: 0.75em 1em;
    background-color: #fff;
    border: 1px solid #ccc;
    letter-spacing: 1px;
    border-radius: 10px;
    flex: 0 auto;
`
const InputButton = styled.input.attrs({ type: 'submit', value: "GET DEMO"})`
    padding-left: 9px;
    font-family: Avertastd,sans-serif;
    font-size: 19px;
    line-height: 105%;
    background-color: #285fca;
    color: #fff;
    direction: ltr;
    border-radius: 10px;
    flex: 0 auto;
    order: 1;
    margin-left: 0;
    margin-right: 0;
    padding: 0.75em 0.25em;
    object-fit: cover;
    margin-top: 0;
    width: 40%;
    height: auto;
    max-width: none;
    letter-spacing: 1px;
`

const Input = () => {
    return (
        <Form>
            <InputMail/>
            <InputButton/>
        </Form>
    );
}

export default Input;