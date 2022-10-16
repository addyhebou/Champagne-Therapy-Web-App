import React from 'react';
import Button from './Buttons/PrimaryBtn';
import '../Styles/BlockSegment.scss';

const textContent = (props) => {
  const orientation = props.orientation === 'left' ? 'leftAlign' : 'rightAlign';
  return (
    <div className={`textContent ${orientation}`}>
      <div
        className={`trapezoid ${
          props.orientation === 'left'
            ? 'borderRadiusLeft'
            : 'borderRadiusRight'
        }`}
      >
        <h1>{props.header}</h1>
      </div>
      <div className="nestedContent">
        <p>{props.description}</p>
        {props.component}
        <p>{props.secondaryDescription}</p>
        <Button text={props.buttonText} />
        {props.secondaryComponent}
      </div>
    </div>
  );
};

const mediaContent = (imageURL, videoURL, imageDescription) => {
  return (
    <div className="mediaContent">
      <img src={imageURL} alt={imageDescription} />
      <video autoPlay muted loop>
        <source src={videoURL} type="video/mp4" />
      </video>
    </div>
  );
};
export default function BlockSegment(props) {
  const orientation = props.orientation === 'left' ? 'row' : 'row-reverse';
  console.log(props);
  return (
    <div className={`BlockSegment ${orientation}`}>
      {textContent(props)}
      {mediaContent(props.imageURL, props.videoURL, props.imageDescription)}
    </div>
  );
}
