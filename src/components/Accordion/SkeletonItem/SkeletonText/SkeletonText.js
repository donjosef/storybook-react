import React from 'react';
import './SkeletonText.css';

function SkeletonText(props) {
  return (
    <p className="skeleton-text" style={{width: props.width + '%'}}></p>
  );
}

export default SkeletonText;
