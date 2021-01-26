import './image-list.css';
import React from 'react';
import ImageCard from './image-card';

const ImageList = (props) => {

    const images = props.images.map((image) => {
        return (
            <ImageCard image={image} key={image.id}/>
        );
    });

    return (
        <div className="image-list">{images}</div>
    );
};

export default ImageList;