import { Grommet } from 'grommet';
import { Route, Routes } from 'react-router-dom';

import { Home } from 'views/Home';
import { Portuguese } from 'views/Portuguese';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
};

export const App = () => {
  return (
    <Grommet theme={theme} themeMode="dark">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portuguese" element={<Portuguese />} />
      </Routes>
    </Grommet>
  );
};
