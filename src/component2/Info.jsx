import React from "react";
import { Box, Typography ,styled} from "@mui/material";
import Img from "../assets/bg-img.jpeg"
import {
  LocationOn,
  SettingsBrightness,
  Opacity,
  Brightness5,
  Brightness6,
  Dehaze,
  Cloud,

} from "@mui/icons-material";

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    "& >  svg":{
        marginRight:10
    }
})

const Error = styled(Typography)({
  color:"red",
  justifyContent:"center",
  alignItems:"center"
})



const Info = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <Box style={{margine: "30px 60px" ,
    backgroundImage:`url(${Img})`,
    backgroundSize:"cover",
    
    
    }}>
      <Row>
        <LocationOn />
        Location: {result.name}, {result.sys.country}
      </Row>
      <Row>
        <SettingsBrightness />
        Temperature: {result.main.temp}
      </Row>
      <Row>
        <Opacity />
        Humidity: {result.main.humidity}
      </Row>
      <Row>
        <Brightness5 />
        Sunrise: {new Date(result.sys.sunrise *1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6 />
        Sunset: {new Date(result.sys.sunset *1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Dehaze />
        Weather: {result.weather[0].main}
      </Row>
      <Row>
            <Cloud/>
            Cloud: {result.clouds.all}%
      </Row>
    </Box>
  ) : <Error >
            <h1>Please Enter Your City</h1>
      </Error>
};

export default Info;
