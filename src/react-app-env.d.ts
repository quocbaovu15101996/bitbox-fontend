/// <reference types="react-scripts" />
/// <reference types="@emotion/react/types/css-prop" />

declare module '@emotion/core/jsx-runtime';
declare module 'react-reveal';
declare module 'react-lottie';
declare module 'react-star-ratings';
declare module 'react-helmet';
declare module '@fullpage/react-fullpage';
declare module 'react-slick';
declare module '@lottiefiles/lottie-player';
declare namespace JSX {
  interface IntrinsicElements {
    'lottie-player': any;
  }
}

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}

declare interface ObjectConstructor {
  keys<T>(o: T): (keyof T)[];
}
