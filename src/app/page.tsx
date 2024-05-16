import { Box, Heading } from "@chakra-ui/react";
import ProductList from "./components/productList";
import CartList from "./components/cartList";


export default function Home() { 
  return ( 
    <Box>
      <Heading>Redux Tool Kit</Heading>
      <ProductList/>
      <CartList/>
    </Box>
  )
}
