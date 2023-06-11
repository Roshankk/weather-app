import React,{useState} from "react"
import {Box , InputBase ,Button , styled}  from "@mui/material"
import getWeather from "../services/api"
import { hover } from "@testing-library/user-event/dist/hover"

const Container = styled(Box)({
    background:"#445A6F",
    padding:10,
    borderRadius:"0  15px 0 0",
})

const Input = styled(InputBase)({
 color:"white",
 marginRight:20,
 fontSize:18
})

const GetBtn= styled(Button)({
    background:"#1057e5",
    color:"white",
    
})
const Form = ({setResult})=>{

    const [data , setData]=useState({city:"" , country:""})
    const handleChange = (e)=>{
        setData({
            ...data,[e.target.name]: e.target.value
        })
       
    }
   const  getWeatherInfo= async()=>{
     let response =   await getWeather(data.city, data.country);
     setResult(response)
    }

    return(
        <Container>
           <Input 
           placeholder="City"
           onChange={(e)=>handleChange(e)}
           name="city"
           />
           <Input
           placeholder="Country"
           onChange={(e)=>handleChange(e)}
           name="country"
           />
           <GetBtn 
           varient="contained"
           onClick={()=>getWeatherInfo()}>GET WEATHER</GetBtn>
        </Container>
    )
}

export default Form;