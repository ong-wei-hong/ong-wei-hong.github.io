import { useState } from 'react';
import pushMessage from './firebase';

const textStyle = {
    'fontFamily': 'inherit',
    'fontSize': 'inherit',
    'color': '#FFFFFF',
    'backgroundColor': '#222222',
    'border': '1px solid #111111',
    'width': '100%',
    'padding': '10px 10px',
    'margin': '15px 0',
    'lineHeight': 1.5
}

const disabledTextStyle = {
    'fontFamily': 'inherit',
    'fontSize': 'inherit',
    'color': '#AAAAAA',
    'backgroundColor': '#666666',
    'border': '1px solid #333333',
    'width': '100%',
    'padding': '10px 10px',
    'margin': '15px 0',
    'lineHeight': 1.5

}

const Form = () => {

    const [submitted, setSubmitted] = useState(false);

    const buttonOnEnter = (e) => {
        if (!submitted) {
            e.target.style.color = '#000000';
            e.target.style.backgroundColor = '#FFFFFF';
            e.target.style.border = '1px solid #DDDDDD';
            e.target.style.cursor = 'pointer';
        }
    }

    const buttonOnExit = (e) => {
        if (!submitted) {
            e.target.style.color = '#FFFFFF';
            e.target.style.backgroundColor = '#222222';
            e.target.style.border = '1px solid #111111';
            e.target.style.cursor = 'inherit';
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        const button = e.target[3];
        button.style.color = '#AAAAAA';
        button.style.backgroundColor = '#666666';
        button.style.cursor = 'inherit';
        button.style.border = '1px solid #333333';
        pushMessage(e.target[0].value, e.target[1].value, e.target[2].value);
    }

    return (
        <form 
            style={{
                padding: 0,
                margin: 0,
                outline: 'none'
            }}
            onSubmit={formSubmit}>
            <ul style={{listStyle: 'none', padding: 0}}>
                <li><input type="text" placeholder="Name" style={submitted ? disabledTextStyle : textStyle} disabled={submitted} required/></li>
                <li><textarea placeholder="Message" style={submitted ? disabledTextStyle : textStyle} disabled={submitted} required/></li>
                <li><input type="text" placeholder="Contact (email, telegram etc.)" style={submitted ? disabledTextStyle : textStyle} disabled={submitted} required /></li>
                <li>
                    <button
                        style={{
                            padding: '15px 15px',
                            margin: '15px 0',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                            color: '#FFFFFF',
                            backgroundColor: '#222222',
                            border: '1px solid #111111'
                        }}
                        onPointerEnter={buttonOnEnter}
                        onPointerLeave={buttonOnExit}
                        disabled={submitted}
                    >
                        { submitted ? 'SENT' : 'SUBMIT' }
                    </button>
                </li>
            </ul>
        </form>
    )
}

export default Form;