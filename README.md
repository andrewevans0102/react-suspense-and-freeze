# React Suspense and Freeze

This repo contains implementations of `React Suspense` and `React Freeze`. This serves as sample projects for my upcoming post on LogRocket about React Freeze.

The original implementation for React Suspense was copied from the implementation shared on the React Docs and CodePen at https://codesandbox.io/s/frosty-hermann-bztrp.

The implementation of React Freeze is a modified version of the React Suspense implementation. The effort was made to make the source code similar so one could see the similar behaviors.

If you'd like to learn more about React Suspense, I recommend checking out the React Docs at https://reactjs.org/docs/concurrent-mode-suspense.html and the sample project at https://codesandbox.io/s/frosty-hermann-bztrp.

If you'd like to learn more about React Freeze, I recommend checking out their implementation on GitHub at https://github.com/software-mansion/react-freeze. I also found Natanaelvich's sample project super helpful if you want to see a React Native implementation, and you can check that out here https://github.com/Natanaelvich/react-freeze-example.

To run both projects, just open this project in a terminal and do the standard `npm install` and then just do `npm run start` to see them in action. The React Freeze project has a "refresh" button which lets you watch the rendering occur if you're using Chrome DevTools. I recommend using the [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to see React Freeze working in the sample projects. I also recommend the "paint flashing" feature of Chrome DevTools to visualize the actual rendering of the components as you run the sample projects.