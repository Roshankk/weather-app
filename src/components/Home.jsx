import React ,{useState}from "react";

import {Box , styled} from "@mui/material"
import Daylight from "../assets/ai-generated-7724592_640.jpg"
import Form from "../component2/Form";
import Info from "../component2/Info";

const Component = styled(Box)({
    height:"100vh",
    display: "flex",
    alignItems:"center",
    // justifyContent:"center",
    margin:"0 auto",
    width:"80%",
})

const Image = styled(Box)({
    backgroundImage:`url(${Daylight})`,
    height:"80%",
    width:"30%",
    backgroundSize:"cover",
    borderRadius:"15px 0 0 15px",
    border: "2px solid black"
})

const Container = styled(Box)({
    borderRadius:"0 17px 15px 0",
    border: "2px solid black",

})

const Home = () => {

    const [result , setResult]=useState({ })
    return (
        <Component>
            <Image> </Image>
            <Container style={{width:"73%", height:"80%"}} >
                <Form setResult={setResult}/>
                <Info result={result}/>
            </Container>
        </Component>
    )
}

export default Home;