import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Image } from './image.component';

/** metadata */

export default StoryUtils.createMeta(Image, 'Display', 'Image', {});

/** component template */

// const Template = StoryUtils.createTemplate(Image);

/** stories */

// export const Default = () => {
//   return (
//     <div style={{ height: '100vh', width: '100vw', overflow: 'auto', paddingTop: '100px', paddingLeft: '50px' }}>
//       <Image wrapperAttributes={{ style: { marginBottom: '600px' } }} imgAttributes={{ style: { width: '100px' } }} src=";sdlfgnspdkfjgnl;ksjdng" />
//       <Image
//         wrapperAttributes={{ style: { marginBottom: '600px' } }}
//         imgAttributes={{ style: { width: '100px' } }}
//         src="https://wallpapercave.com/wp/wp2550666.jpg"
//       />
//       <Image
//         wrapperAttributes={{ style: { marginBottom: '600px' } }}
//         imgAttributes={{ style: { width: '100px' } }}
//         src="https://wallpapercave.com/wp/wp2550666.jpg"
//       />
//       <Image
//         wrapperAttributes={{ style: { marginBottom: '600px' } }}
//         imgAttributes={{ style: { width: '100px' } }}
//         src="https://wallpapercave.com/wp/wp2550666.jpg"
//       />
//     </div>
//   );
// };
export const Default = () => {
  return <Image alt="I'm an image" src="https://wallpapercave.com/wp/wp2550666.jpg" />;
};
export const Error = () => {
  return <Image alt="I'm an image" src="sd;klfgjnsdfk;ljgnsd;lkfgn;dlsfkgn;slkdngl;ksdfngl;ksdnfg" />;
};
export const Pending = () => {
  return (
    <>
      <Image alt="I'm an image" src="https://effigis.com/wp-content/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg" />
      <p style={{ position: 'absolute', top: '250px' }}>To rerun, empty your browsers cache for this page and hard reload</p>
    </>
  );
};
export const MultipleSources = () => {
  return (
    <>
      <Image
        alt="I'm an image"
        src="https://wallpapercave.com/wp/wp2550666.jpg"
        additionalSources={[{ srcSet: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', media: '(max-width: 600px)' }]}
      />
      <p>Change the width to change the image</p>
    </>
  );
};
