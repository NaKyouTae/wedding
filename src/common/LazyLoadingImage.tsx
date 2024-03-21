import {useEffect, useState} from "react";
import styled from "styled-components";

function LazyLoadingImage({
                              src,
                              alt,
                              onError,
                              onClick,
                              placeholderImg
                          }: any) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        if (!isLoading) return
        image.src = src;
        image.onload = () => {
            setIsLoading(false);
        };
        image.onerror = () => {
            setIsLoading(true);
        };

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [src, isLoading]);

    return (
        <LazyImage
            className={isLoading ? 'loading' : 'loaded'}
            src={isLoading ? placeholderImg : src}
            loading="lazy"
            alt={isLoading ? "" : alt}
            onError={onError || null}
            onClick={onClick}
        />

    )
}

export default LazyLoadingImage


const LazyImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  transition: all 0.5s;

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }

  &.loaded {
    filter: blur(0px);
  }
`
