import { Box, Grommet } from 'grommet';

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
    <Grommet theme={theme}>
      <Box direction="row" justify="center" fill="vertical" margin="medium">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fCn8zs912OE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      </Box>
    </Grommet>
  );
};
