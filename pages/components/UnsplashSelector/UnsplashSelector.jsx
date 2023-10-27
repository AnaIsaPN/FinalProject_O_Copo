// components/UnsplashSelector.js
import React, { useState } from 'react';
import unsplash from '../../../utils/Unsplash';
import styles from "./UnsplashSelector.module.css"

const UnsplashSelector = ({ onSelect, setHasContent }) => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);

    const searchImages = async () => {
        try {
            const response = await unsplash.search.getPhotos({ 
                query, 
                perPage: 50, 
                orientation: 'landscape' });
            if (response.type === 'success') {
                setImages(response.response.results);
                setHasContent(true)
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Pesquise imagens no Unsplash..."
                    className={styles.input}
                />
                <button
                    onClick={searchImages}
                    className={styles.searchButton}
                >
                    <img src="/assets/icons/icon-small-search.svg" />
                </button>
            </div>
            <div className={styles.images}>
                {images.map((img) => (
                    <img

                        key={img.id}
                        src={img.urls.small}
                        alt={img.description}
                        onClick={() => onSelect(img)}
                    />
                ))}
            </div>
        </div>
    );
};

export default UnsplashSelector;
