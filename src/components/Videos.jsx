import React from "react";
import { Stack, Box } from "@mui/material";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWarp="wrap" justifyCotent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
