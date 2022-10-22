import React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/imgs';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const handleError = () => {};

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={src || images.noImage}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
