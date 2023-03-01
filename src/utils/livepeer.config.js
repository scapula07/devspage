import {
    LivepeerConfig,
    createReactClient,
    studioProvider,
  } from '@livepeer/react';

  export const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: "b9c0d7cf-9c44-4a3e-985b-820dbf9eeecd",
    }),
  });