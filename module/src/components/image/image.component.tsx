import * as React from 'react';
import { HTMLAttributes } from 'react';

import { useElementStatus } from '../../hooks/useElementStatus';
import { useHasTimeElapsedSinceMount } from '../../hooks/useHasTimeElapsed';
import { IUseInViewportOptions, useInViewport } from '../../hooks/useIsInViewport';
import { ClassNames } from '../../utils/classNames';
import { IStatusProps, Status } from '../status';

export interface IImageSource {
  /** (string) the url source which will replace the main src if the right conditions are met */
  srcSet: string;

  /** (string) A media query used to decide whether to render this source I.E. "(min-width: 500px)" (see [picture on mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)) */
  media?: string;

  /** (string) The type of the linked image source, I.E. "image/jpg", used by the browser to determine which image to show based on support of file types */
  type?: string;

  /** (HTMLSourceElement) Attributes to spread onto the source element */
  attributes?: Omit<HTMLAttributes<HTMLSourceElement>, 'srcSet' | 'media' | 'type'>;
}

type ImageSource = string | IImageSource;

export interface IImageProps extends Omit<IUseInViewportOptions, 'once'>, Pick<IStatusProps, 'spinnerIcon' | 'errorIcon'> {
  /** (HTMLPictureElement) attributes to spread onto the picture element */
  pictureAttributes?: Omit<HTMLAttributes<HTMLPictureElement>, 'ref'>;

  /** (HTMLImageElement) attributes to spread onto the img element */
  imgAttributes?: Omit<HTMLAttributes<HTMLImageElement>, 'ref' | 'src' | 'alt'>;

  /** (HTMLDivElement) attributes to spread onto the wrapping div element */
  wrapperAttributes?: Omit<HTMLAttributes<HTMLDivElement>, 'ref'>;

  /** (string) the main src for the image */
  src: string;

  /** (ImageSource[]) render a bunch of additional sources which will be rendered optionally by the browser, I.E for showing different formats in browsers that support them, or different images at different screen sizes (see [picture on mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)) */
  additionalSources?: ImageSource[];

  /** (string) the alt text used for the image - this is required as not including it hinders accessibility and you wil be penalized in SEO. If you really really think you don't need it, you can manually set it to undefined */
  alt: string | undefined;

  /** (number) the time in ms to wait after loading begins before showing a spinner - defaults to 1000ms */
  timeToSpinner?: number;
}

/** This is a separate component as a lot of its internal logic depends on when it is mounted by the outer component */
const ImageInner: React.FC<IImageProps> = ({ pictureAttributes, imgAttributes, src, additionalSources, timeToSpinner, errorIcon, spinnerIcon }) => {
  const internalImageRef = React.useRef<HTMLImageElement>(null);
  const { error, loaded, loading, props: elementStatusProps } = useElementStatus(internalImageRef);
  const showSpinner = useHasTimeElapsedSinceMount(timeToSpinner!);

  return (
    <div className="arm-image-inner" data-loading={loading} data-loaded={loaded} data-error={error}>
      {!error && (
        <picture {...pictureAttributes}>
          {additionalSources?.map((source) =>
            typeof source === 'string' ? (
              <source srcSet={source} key={source} />
            ) : (
              <source srcSet={source.srcSet} media={source.media} type={source.type} {...(source.attributes || {})} key={source.srcSet} />
            )
          )}
          <img {...imgAttributes} {...elementStatusProps} src={typeof src === 'string' ? src : src[0]} ref={internalImageRef} />
        </picture>
      )}

      <Status pending={loading && showSpinner} error={error} spinnerIcon={spinnerIcon} errorIcon={errorIcon} />
    </div>
  );
};

/** A lazy loaded image which will show a spinner if the image is taking a while to load */
export const Image = React.forwardRef<HTMLDivElement, IImageProps>((props, ref) => {
  const { wrapperAttributes, rootMargin, threshold, onEnter, onExit, ...innerImageProps } = props;

  const internalRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

  const enteredViewport = useInViewport(internalRef, { rootMargin, threshold, onEnter, onExit, once: true });

  return (
    <div
      {...wrapperAttributes}
      className={ClassNames.concat('arm-image', wrapperAttributes?.className)}
      data-entered-viewport={enteredViewport}
      ref={internalRef}
    >
      {enteredViewport && <ImageInner {...innerImageProps} />}
    </div>
  );
});

Image.defaultProps = {
  rootMargin: '50%',
  timeToSpinner: 1000,
};
