import React from 'react';
import Button from './Buttons/PrimaryBtn';
import '../Styles/BlockSegment.scss';

const textContent = (
  props: Exclude<
    BlockSegmentProps,
    'videoURL' | 'imageURL' | 'component' | 'secondaryComponent'
  >
) => {
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
        <Button text={props.buttonText} link={props.route} />
        {props.secondaryComponent}
      </div>
    </div>
  );
};

const mediaContent = (
  imageDescription: string,
  imageURL: string,
  videoURL?: string
) => {
  return (
    <div className="mediaContent">
      <img src={imageURL} alt={imageDescription} />
      {videoURL && (
        <video autoPlay muted loop>
          <source src={videoURL} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

interface BlockSegmentProps {
  orientation: string;
  header: string;
  route: string;
  description: string;
  component?: React.ReactNode;
  secondaryDescription?: string;
  buttonText: string;
  secondaryComponent?: React.ReactNode;
  videoURL?: string;
  imageURL: string;
  imageDescription: string;
}

export default function BlockSegment(props: BlockSegmentProps) {
  const orientation = props.orientation === 'left' ? 'row' : 'row-reverse';
  return (
    <div className={`BlockSegment ${orientation}`}>
      {textContent(props)}
      {mediaContent(props.imageDescription, props.imageURL, props.videoURL)}
    </div>
  );
}
