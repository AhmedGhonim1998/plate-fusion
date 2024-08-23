    import React, { useState, useEffect, useRef } from 'react';
    import { Stage, Layer, Text, Rect, Image } from 'react-konva';
    import "./LicensePlateDisplay.css";
    import SymbolKeyboard from './components/SymbolKeyboard';
    import imagePlate from'../assets/image/plateImageSk.png';

    const LicensePlateDisplay = () => {
    const [plateText, setPlateText] = useState('YOUR TEXT');
    const [plateColor, setPlateColor] = useState('lightgray');
    const [textColor, setTextColor] = useState('black');  // State for text color
    const [image, setImage] = useState(null);
    const imageRef = useRef(null);

    // Maximum characters allowed
    const maxChars = 13;

    useEffect(() => {
        const img = new window.Image();
        img.src = imagePlate;
        img.onload = () => {
        setImage(img);
        };
    }, []);

    const handleTextChange = (e) => {
        const newText = e.target.value;
        if (newText.length <= maxChars) {
        setPlateText(newText);
        }
    };

    const handleColorChange = (e) => {
        setPlateColor(e.target.value);
    };

    const handleTextColorChange = (e) => {  // Function to change text color
        setTextColor(e.target.value);
    };

    const handleSymbolSelect = (symbol) => {
        if (plateText.length < maxChars) {
        setPlateText((prevText) => prevText + symbol);
        }
    };

    return (
        <div>
        <div className="input-container">
            {/* Text Input */}
            <input
            type="text"
            value={plateText}
            onChange={handleTextChange}
            placeholder="Enter your plate text"
            className="input-box"
            />
            
            {/* Character Counter */}
            <span className="char-counter">
            {maxChars - plateText.length}
            </span>
        </div>
        
        <div className="color-inputs">
            <label>
            Plate Color:
            <input
                type="color"
                value={plateColor}
                onChange={handleColorChange}
                className="color-picker"
            />
            </label>
            <label>
            Text Color:
            <input
                type="color"
                value={textColor}  // Bind text color picker to state
                onChange={handleTextColorChange}
                className="color-picker"
            />
            </label>
        </div>

        {/* Add the Symbol Keyboard here */}
        <SymbolKeyboard onSelectSymbol={handleSymbolSelect} />

        <Stage width={380} height={200}>
            <Layer>
            <Rect
                x={20}
                y={50}
                width={360}
                height={100}
                cornerRadius={10}
                strokeWidth={2}
                fill={plateColor}
                stroke="black"
            />
            {image && (
                <Image
                image={image}
                x={21}
                y={50}
                cornerRadius={[10, 0, 0, 10]}
                width={50}
                height={100}
                ref={imageRef}
                />
            )}
            <Text
                text={plateText}
                fontSize={40}
                x={90}
                y={80}
                fill={textColor}  // Apply the selected text color
                fontStyle="bold"
                align="center"
                verticalAlign="middle"
            />
            </Layer>
        </Stage>
        </div>
    );
    };

    export default LicensePlateDisplay;
