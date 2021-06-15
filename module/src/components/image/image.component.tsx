import * as React from 'react';
import { HTMLAttributes } from 'react';

export interface IImageSource {
  srcset: string;
  media?: string;
  type?: string;
  attributes?: Omit<HTMLAttributes<HTMLSourceElement>, 'srcset' | 'media' | 'type'>;
}

export interface IImageProps {
  pictureAttributes?: Omit<HTMLAttributes<HTMLPictureElement>, 'ref'>;
  imgAttributes?: Omit<HTMLAttributes<HTMLImageElement>, 'ref' | 'src'>;
  src: string | (string | IImageSource)[];
}

export const Image: React.FunctionComponent<IImageProps> = ({ pictureAttributes, imgAttributes, src }) => {
  return (
    <div className="arm-image">
      <picture {...pictureAttributes}>
        <img
          {...imgAttributes}
          src={typeof src === 'string' ? src : ''}
          onLoadCapture={() => console.log('onLoadCapture')}
          onLoadStart={() => console.log('onLoadStart')}
          onLoadStartCapture={() => console.log('onLoadStartCapture')}
          onLoadedData={() => console.log('onLoadedData')}
          onLoadedDataCapture={() => console.log('onLoadedDataCapture')}
          onLoadedMetadata={() => console.log('onLoadedMetadata')}
          onLoadedMetadataCapture={() => console.log('onLoadedMetadataCapture')}
          onLoad={() => console.log('onLoad')}
        />
      </picture>
    </div>
  );
};
