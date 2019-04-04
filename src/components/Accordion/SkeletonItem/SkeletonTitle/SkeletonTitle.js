import React from 'react';
import './SkeletonTitle.css';

function SkeletonTitle(props) {
  return (
    <p className="skeleton-title" style={{width: props.width + '%'}}></p>
  );
}

export default SkeletonTitle;
