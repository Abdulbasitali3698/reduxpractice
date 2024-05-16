"use client"
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useAppSelector } from "../store/hooks"

 

export default function CartList() {
    const cart = useAppSelector((state)=>(state.cartArray));

  return (
    <Box>
        <Box>
            <Heading textAlign="center">
                Cart List
            </Heading>
        </Box>
        <Box height="10vh" display="flex" gap={2} alignItems="center"  flexDirection="column">
            {cart.map((val, i)=>{
                return(
                    <Box key={i}  height="100%" width="50%" display="flex" justifyContent="space-between" border="1px">
                        <Text>Name: {val.name}</Text>
                        <Text>Company: {val.company}</Text>
                        <Text>Quantity: {val.qty}</Text>
                        <Button>Add Cart</Button>
                    </Box>
                )
            })}
            
        </Box>
    </Box>
        
        
  )
}
