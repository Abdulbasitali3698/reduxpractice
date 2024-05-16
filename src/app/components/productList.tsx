"use client"
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAppSelector,useAppDispatch } from '../store/hooks'
import { addProduct } from '../store/slices/product';
import { addCart } from '../store/slices/cart';


export default function ProductList() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [qty, setQty] = useState(0); 
    const products = useAppSelector((state)=>(state.productArray))
    const dispatch = useAppDispatch();
  
    return (
    <Box>
        <Box>
            <Heading textAlign="center">
                Add Product
            </Heading>
        </Box>
        <Box  height="15vh" display="flex" justifyContent="space-around" alignItems="center">
            <Input variant="outline"  width="30vh" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
            <Input variant="outline" width="30vh" placeholder='Company' value={company} onChange={(e) =>setCompany(e.target.value)} />
            <Input variant="outline" width="30vh" placeholder='Quantity' value={qty} onChange={(e:any)=>setQty(e.target.value)}/>
            <Button onClick={()=>dispatch(addProduct({name:name, company:company, qty:qty}))} >Add Item</Button>
        </Box>
        <Box>
            <Heading textAlign="center">
                Product List
            </Heading>
        </Box>
        <Box height="40vh" display="flex" gap={2}>
            {products.map((item, i)=>{
                return(
                    <Box key={i}  height="100%" width="20%" display="flex" flexDirection="column" gap={7} border="1px">
                        <Text>Name: {item.name}</Text>
                        <Text>Company: {item.company}</Text>
                        <Text>Quantity: {item.qty}</Text>
                        <Button onClick={()=>dispatch(addCart({name:item.name,company:item.company,qty:item.qty}))}>Add to Cart</Button>
                    </Box>
                )
            })}
            
        </Box>
    </Box>
  )
}
