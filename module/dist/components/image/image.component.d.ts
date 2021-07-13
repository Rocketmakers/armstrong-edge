import * as React from 'react';
import { HTMLAttributes } from 'react';
import { IUseInViewportOptions } from '../../hooks/useIsInViewport';
import { IStatusProps } from '../status';
export interface IImageSource {
    /** the url source which will replace the main src if the right conditions are met */
    srcSet: string;
    /** A media query used to decide whether to render this source I.E. "(min-width: 500px)" (see [picture on mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)) */
    media?: string;
    /** The type of the linked image source, I.E. "image/jpg", used by the browser to determine which image to show based on support of file types */
    type?: string;
    /** Attributes to spread onto the source element */
    attributes?: Omit<HTMLAttributes<HTMLSourceElement>, 'srcSet' | 'media' | 'type'>;
}
declare type ImageSource = string | IImageSource;
export interface IImageProps extends Omit<IUseInViewportOptions, 'once'>, Pick<IStatusProps, 'spinnerIcon' | 'errorIcon'> {
    /** attributes to spread onto the picture element */
    pictureAttributes?: Omit<HTMLAttributes<HTMLPictureElement>, 'ref'>;
    /** attributes to spread onto the img element */
    imgAttributes?: Omit<HTMLAttributes<HTMLImageElement>, 'ref' | 'src' | 'alt'>;
    /** attributes to spread onto the wrapping div element */
    wrapperAttributes?: Omit<HTMLAttributes<HTMLDivElement>, 'ref'>;
    /** the main src for the image */
    src: string;
    /** render a bunch of additional sources which will be rendered optionally by the browser, I.E for showing different formats in browsers that support them, or different images at different screen sizes (see [picture on mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)) */
    additionalSources?: ImageSource[];
    /** the alt text used for the image - this is required as not including it hinders accessibility and you wil be penalized in SEO. If you really really think you don't need it, you can manually set it to undefined */
    alt: string | undefined;
    /** the time in ms to wait after loading begins before showing a spinner - defaults to 1000ms */
    timeToSpinner?: number;
}
/** A lazy loaded image which will show a spinner if the image is taking a while to load */
export declare const Image: React.ForwardRefExoticComponent<IImageProps & React.RefAttributes<HTMLDivElement>>;
export {};
