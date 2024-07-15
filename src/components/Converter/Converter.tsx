import {useState} from 'react';

function HexToRGB(hex: string): string {
    const
        r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    return `rgb(${r}, ${g}, ${b})`;
}

const regHEX: RegExp = /#[0-9a-f]{6}/;

export const Converter = () => {

    const [bgColor, setBgColor] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;
        if (value.length < 7) {
            return;
        }

        if (regHEX.test(value.toLowerCase())) {
            const rgb: string = HexToRGB(value);
            setBgColor(rgb);
        } else {
            setBgColor('Ошибка!');
        }
    }

    return (
        <div className="Converter" style={{backgroundColor: bgColor == 'Ошибка!' ? '#ff0000' : bgColor}}>
            <div className="Converter__container">
                <input className="Converter__input" onChange={handleChange}/>
                <div className="Converter__result">{bgColor}</div>
            </div>
        </div>
    );
}