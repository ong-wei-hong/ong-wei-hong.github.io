import { useEffect } from 'react';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const colors = ['#FFA500', '#FFFF00', '#00FF00', '#8F00FF', "#00FFFF"];

const iconStyle={
    color: "#FFFFFF",
    backgroundColor: "#000000",
    marginRight: "3rem",
    fontSize: "1.5rem",
    position: 'relative',
    top: 0,
    transition: 'top ease 0.2s'
}

const About = () => {

    const leftText = ["Hello,", "I'm Wei Hong"];
    const rightText = [
        "I am a computer science student in NUS.",
        "I am interested in full stack development opportunities,",
        "especially ambitious or large projects."
    ];
    const contactMe = ["Contact Me"];
    const contactMeSub = ["Drop me a message, or contact me through my links below"]

    const selectRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const changeToRandomColor = (e) => {
        e.target.style.color = selectRandom(colors);
        e.target.style.top = '-0.5rem';
    }
    const changeToWhite = (e) => {
        e.target.style.color = '#FFFFFF';
        e.target.style.top = 0
    }

    const convert = (text) => 
        text.map((line, i) => 
            <div key={`line${i}`}>
                { Array.from(line).map((c, i) => 
                    <span 
                        onPointerEnter={changeToRandomColor}
                        onPointerLeave={changeToWhite}
                        key={`char${i}`}
                        style={{
                            position: 'relative',
                            top: 0,
                            transition: 'top ease 0.2s'
                        }}
                    >
                        {c}
                    </span>) 
                }
            </div>);

    useEffect(() => Array.from(document.getElementsByClassName('fade-in')).forEach(e => e.style.opacity = 1), []);

    return(
        <div 
            style={{
                color:'white',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                height: '100%'
            }}
        >
            <div>
                <div 
                    className='fade-in'
                    style={{
                        padding: '1rem',
                        fontSize: '5rem',
                        fontWeight: 'bold',
                        opacity: 0,
                        transition: '2s'
                    }}
                >
                    { convert(leftText) }    
                </div>    
                <div
                    className='fade-in'
                    style={{
                        padding: '1rem',
                        opacity: 0,
                        transition: '2s',
                        fontSize: '1rem'
                    }}
                >
                    { convert(rightText) }
                </div>
            </div>
            <div 
                className='fade-in'
                style={{ 
                    padding: '2rem',
                    opacity: 0,
                    transition: '4s',
                    fontSize: '1rem'
                }}
            >
                <div
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold'

                    }}
                >
                    { convert(contactMe) }
                </div>
                <div>{ convert(contactMeSub) }</div>
                <div><Form /></div>
                <div>
                    <a 
                        href="https://www.linkedin.com/in/ong-wei-hong/" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span style={iconStyle} onPointerEnter={changeToRandomColor} onPointerLeave={changeToWhite}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </span>
                    </a>
                    <a 
                        href="https://github.com/ong-wei-hong" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <span style={iconStyle} onPointerEnter={changeToRandomColor} onPointerLeave={changeToWhite}>
                            <FontAwesomeIcon icon={faGithub} />
                        </span>
                    </a>
                    <a 
                        href="mailto:weihong.ong@outlook.com" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span style={iconStyle} onPointerEnter={changeToRandomColor} onPointerLeave={changeToWhite}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;