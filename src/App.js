import React from 'react';
import { Grommet, Header } from 'grommet';

// const customBreakpoints = {
//   global: {
//     breakpoints: {
//       xsmall: {
//         value: 375,
//       },
//       small: {
//         value: 568,
//         edgeSize: {
//           none: '0px',
//           small: '6px',
//           medium: '12px',
//           large: '24px',
//         },
//       },
//       medium: {
//         value: 768,
//         edgeSize: {
//           none: '0px',
//           small: '12px',
//           medium: '24px',
//           large: '48px',
//         },
//       },
//       large: {
//         value: 1024,
//         edgeSize: {
//           none: '0px',
//           small: '12px',
//           medium: '24px',
//           large: '48px',
//         },
//       },
//       xlarge: {
//         value: 1366,
//         edgeSize: {
//           none: '0px',
//           small: '12px',
//           medium: '24px',
//           large: '48px',
//         },
//       },
//     },
//   },
// };

function App() {
  return ( 
    <div>
      <Grommet theme={grommet}>
        <Header background="dark-1" pad="large" height="small">
          <Anchor
            href="https://tools.grommet.io/"
            label="sample"
          />
        </Header>
      </Grommet>
    </div>
  )
}

export default App;
