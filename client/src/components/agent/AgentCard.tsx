import React from "react";
import { AgentCardProp, InfoBarProps } from "interfaces/agent";
import { EmailOutlined, LocationCity, Phone, Place } from "@mui/icons-material";
import { useGetIdentity } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack flex={1} minWidth={{ xs: "100%", sm: 250 }} gap={1.5} direction="row">
    {icon}
    <Typography>{name}</Typography>
  </Stack>
);

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if (currentUser.email === email) return "/my-profile";
    return `/agents/show/${id}`;
  };
  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        padding: "20px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
        },
      }}
    >
      <img
        src={avatar}
        alt="user"
        width="90px"
        height="90px"
        style={{ borderRadius: 8, objectFit: "cover" }}
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
          <Typography fontSize={22} fontWeight={600} color="#11142d">
            {name}
          </Typography>
          <Typography fontSize={14} fontWeight={600} color="#808191">
            Real-Estate Agent
          </Typography>
        </Stack>
        <Stack
          gap={2}
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <InfoBar
            icon={<EmailOutlined sx={{ color: "#808191" }} />}
            name={email}
          />
          <InfoBar
            icon={<Place sx={{ color: "#808191" }} />}
            name="Lucknow,IN"
          />
          <InfoBar
            icon={<Phone sx={{ color: "#808191" }} />}
            name="+91-87070707070"
          />
          <InfoBar
            icon={<LocationCity sx={{ color: "#808191" }} />}
            name={`${noOfProperties} properties`}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
