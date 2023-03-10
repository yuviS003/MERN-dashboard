import React from "react";
import { useList } from "@pankod/refine-core";
import { AgentCard } from "components";
import { Box, Typography } from "@pankod/refine-mui";

const Agent = () => {
  const { 
    data, 
    // isLoading, 
    // isError 
  } = useList({ resource: "users" });

  const allAgents = data?.data ?? [];
  console.log(allAgents);
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Agent's List
      </Typography>
      <Box
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#fcfcfc",
        }}
      >
        {allAgents.map((agent) => (
          <AgentCard
            key={agent._id}
            id={agent._id}
            name={agent.name}
            email={agent.email}
            avatar={agent.avatar}
            noOfProperties={agent.allProperties.length}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Agent;
