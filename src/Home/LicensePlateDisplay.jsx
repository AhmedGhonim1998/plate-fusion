    import React, { useState, useEffect, useRef } from 'react';
    import { Stage, Layer, Text, Rect, Image } from 'react-konva';
    import "./LicensePlateDisplay.css";
    import imagePlate from'../assets/image/plateImageSk.png';
    const LicensePlateDisplay = () => {
    // State to store the input text, plate color, and image
    const [plateText, setPlateText] = useState('YOUR TEXT');
    const [plateColor, setPlateColor] = useState('lightgray');
    const [image, setImage] = useState(null);

    // Refs to hold image instance
    const imageRef = useRef(null);

    // Load the image
    useEffect(() => {
        const img = new window.Image();
        img.src = imagePlate; // Replace with your image URL
        img.onload = () => {
        setImage(img);
        };
    }, []);

    // Handle input changes
    const handleTextChange = (e) => {
        setPlateText(e.target.value);
    };

    const handleColorChange = (e) => {
        setPlateColor(e.target.value);
    };

    return (
        <div>
        <input
            type="text"
            value={plateText}
            onChange={handleTextChange}
            placeholder="Enter your plate text"
            className="input-box"
        />
        
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
        </div>

        <Stage width={380} height={200}>
            <Layer>
            <Rect
                x={20}
                y={50}
                width={360}
                height={100}
                cornerRadius={10}
                strokeWidth={2}
                fill={plateColor}  // Use the state color
                stroke="black"
            />
            {image && (
                <Image
                image={image}
                x={21}  // Position the image
                y={50}
                cornerRadius={[10, 0, 0, 10]}
                width={50}  // Size of the image
                height={100}
                ref={imageRef}
                />
            )}
            <Text
                text={plateText}
                fontSize={40}
                x={90}  // Adjusted to avoid overlapping with the image
                y={80}  // Center the text vertically
                fill="black"
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
