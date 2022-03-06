import { Box, Button } from 'grommet';

export const Home = () => {
  return (
    <Box align="center" direction="column" justify="center" margin="large">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="315"
        src="https://www.youtube.com/embed/fCn8zs912OE"
        title="YouTube video player"
        width="560"
      />
      <Button
        alignSelf="center"
        href="/portuguese"
        label="Learn Portuguese"
        margin="large"
      />
    </Box>
  );
};
