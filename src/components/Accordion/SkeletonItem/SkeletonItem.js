import React from 'react'
import SkeletonText from './SkeletonText/SkeletonText';
import SkeletonTitle from './SkeletonTitle/SkeletonTitle';
import './SkeletonItem.css';

function SkeletonItem(props) {
    let accordionArrowClass = ['accordion__arrow'];

    if (props.open) {
        accordionArrowClass.push('accordion__arrow--active');
    }

    return (
        <li className="skeleton__item">
            <button className="accordion__heading">
                <div className={accordionArrowClass.join(" ")}>&gt;</div>
                <div className="accordion__title">
                    <SkeletonTitle width={100} />
                </div>
            </button>
            {props.open && (
                <div className='accordion__content accordion__content--open'>
                    <SkeletonText width={90} />
                    <SkeletonText width={80} />
                    <SkeletonText width={95} />
                </div>
            )}
        </li>
    );
}

export default SkeletonItem;
