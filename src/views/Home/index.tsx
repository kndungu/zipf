import { Box, Button } from 'grommet';

import './Home.css';

export const Home = () => {
  return (
    <Box align="center" margin="large">
      <div className="videoContainer">
        <div className="videoWrapper">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            src="https://www.youtube.com/embed/fCn8zs912OE"
            title="YouTube video player"
          />
        </div>
      </div>

      <Button href="/portuguese" label="Learn Portuguese" margin="large" />
    </Box>
  );
};
