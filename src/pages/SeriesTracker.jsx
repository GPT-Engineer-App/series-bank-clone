import React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

const SeriesTracker = () => {
  const trackedSeries = [
    { id: 1, name: "Breaking Bad", episode: "S01E01" },
    { id: 2, name: "Game of Thrones", episode: "S03E05" },
  ];

  const handleMarkWatched = (id) => {
    console.log(`Marked episode as watched for series with id ${id}`);
  };

  const handleRemoveSeries = (id) => {
    console.log(`Removed series with id ${id} from tracking list`);
  };

  return (
    <Box p={10}>
      <Heading as="h2" size="xl" mb={8}>
        Minhas Séries
      </Heading>
      {trackedSeries.map((series) => (
        <Flex key={series.id} align="center" justify="space-between" mb={4}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              {series.name}
            </Text>
            <Text>Current Episode: {series.episode}</Text>
          </Box>
          <Box>
            <Button colorScheme="blue" size="sm" mr={2} onClick={() => handleMarkWatched(series.id)}>
              Mark as Watched
            </Button>
            <Button colorScheme="red" size="sm" onClick={() => handleRemoveSeries(series.id)}>
              Remove
            </Button>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default SeriesTracker;
