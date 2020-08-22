import React, { useState } from 'react';

import { Container, Globals, CssBox, ObjectInput, Button } from './styles';


export default function App() {
    const [width, setWidth] = useState('200px');
    const [height, setHeight] = useState('150px');
    const [topLeft, setTopLeft] = useState('10px');
    const [topRight, setTopRight] = useState('10px');
    const [bottomLeft, setBottomLeft] = useState('10px');
    const [bottomRight, setBottomRight] = useState('10px');
    const [background, setBackground] = useState('#120202');
    const [alertText, setAlertText] = useState('');

    const boxStyle = {
        width: width,
        height: height,
        borderRadius: `${topLeft} ${topRight} ${bottomLeft} ${bottomRight}`,
        background: background,
    } 

    const copyText = () => {
        const copyText = `
            width: ${width};
            height: ${height};
            border-radius: ${topLeft} ${topRight} ${bottomLeft} ${bottomRight};
            background: ${background};
        `;
        navigator.clipboard.writeText(copyText);
        setAlertText("CSS code copied to clipboard!!");
    }

    if (alertText !== '') {
        setTimeout(()=> {
            setAlertText('');
        }, 2000)
    }

    return (
        <>
            <Globals></Globals>
            <Container>
            <h1>Welcome to Border-radius Previewer App!</h1>
                <div style={boxStyle}></div> 
                <p>{alertText}</p>
                <CssBox>
                    <div>
                        width:                            
                        <ObjectInput 
                            onChange={e => setWidth(e.target.value)}
                            value={width}
                        />;
                    </div>
                    <div>
                        height:                            
                        <ObjectInput 
                            onChange={e => setHeight(e.target.value)}
                            value={height}
                        />;
                    </div>
                    <div>
                        border-radius:                            
                        <ObjectInput 
                            onChange={e => setTopLeft(e.target.value)}
                            value={topLeft}
                        />
                        <ObjectInput 
                            onChange={e => setTopRight(e.target.value)}
                            value={topRight}
                        />
                        <ObjectInput 
                            onChange={e => setBottomLeft(e.target.value)}
                            value={bottomLeft}
                        />
                        <ObjectInput 
                            onChange={e => setBottomRight(e.target.value)}
                            value={bottomRight}
                        />
                        ;
                    </div>
                    <div>
                        background:                            
                        <ObjectInput 
                            onChange={e => setBackground(e.target.value)}
                            value={background}
                        />;
                    </div>
                    <Button onClick={copyText}>Copy CSS Result</Button>
                </CssBox>
            </Container>
        </>
    )
}

