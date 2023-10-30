import React, { useState } from 'react';
import styles from "./ImageList.module.css"
import ApplePie from '../public/assets/images/ApplePie.png';
import Bellini from '../public/assets/images/Bellini.png';
import Blizzard from '../public/assets/images/Blizzard.png';
import BocceBall from '../public/assets/images/BocceBall.png';
import Bramble from '../public/assets/images/Bramble.png';
import Caipirinha1 from '../public/assets/images/Caipirinha1.png';
import Caipiruva from '../public/assets/images/Caipiruva.png';
import ChocolateKiss from '../public/assets/images/ChocolateKiss.png';
import CoconutBlueHawaiian from '../public/assets/images/CoconutBlueHawaiian.png';
import French from '../public/assets/images/French.png';
import Gin from '../public/assets/images/Gin.png';
import GinSwizzle from '../public/assets/images/GinSwizzle.png';
import HangmasBlood from '../public/assets/images/HangmasBlood.png';
import RedRoyal from '../public/assets/images/RedRoyal.png';
import RedRussian from '../public/assets/images/RedRussian.png';
import Smoothie from '../public/assets/images/Smoothie.png';
import Smoothie1 from '../public/assets/images/Smoothie1.png';
import StrawberryCoconutKiwi from '../public/assets/images/StrawberryCoconutKiwi.png';
import SwimmingPool from '../public/assets/images/SwimmingPool.png';
import WhiteChristmasDream from '../public/assets/images/WhiteChristmasDream.png';

export default function ImageList({ onSelect }) { 

    const images = [ApplePie, Bellini, Blizzard, BocceBall, Bramble, Caipiruva, Caipirinha1, ChocolateKiss, CoconutBlueHawaiian, French, Gin, GinSwizzle, HangmasBlood, RedRoyal, RedRussian, Smoothie, Smoothie1, StrawberryCoconutKiwi, SwimmingPool, WhiteChristmasDream];

    return (
        <div className={styles.container}>
            <div className={styles.images}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={`Imagem local ${index}`}
                        onClick={() => onSelect(img)}
                    />
                ))}
            </div>
        </div>
    );
};  
