import React from 'react';
import { Grommet, Header, Anchor } from 'grommet';
import { grommet } from 'grommet/themes';

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
        <Header background="dark-1" pad="xsmall" height="xsmall">
          <Anchor
            href="#"
            label="sample"
          />
        </Header>
      </Grommet>
    </div>
  )
}

export default App;
