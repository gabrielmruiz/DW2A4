import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Product from "../Product";

import { Container, Box } from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <Header />

           <Box>
           <Product /> 
           </Box> 

           <Footer />   
        </Container>
    );
};

export default Layout;