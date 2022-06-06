import React from 'react';
import { AppBar, Container, Toolbar, styled, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/images/logo.png';


const StyledHeader = styled(AppBar)`
background: #000;
padding: 5px;

`;

const SearchBar = styled(Box)(() => ({
    background: "#032202",
    padding: "0px 10px",
    marginLeft: "40px",
    border: "4px solid #093009",
    borderRadius: "10px",
    width:"350px",
    display: "flex",
    alignItems: "center",
    justifyContent:"start"
}))

const Search = styled(InputBase)(() => ({
    color: "inherit",
    marginLeft:"10px",
    width:"350px"
}))

const Header = () => {

  return (
    <StyledHeader position='fixed'>
        <Container maxWidth="xl">
            <Toolbar >
                <img src={logo} style={{width:"100px"}} alt="logo" />
                <SearchBar>
                    <SearchIcon/>
                <Search 
                placeholder='Search Character'/>
                </SearchBar>
            </Toolbar>
        </Container>
    </StyledHeader>
  )
}

export default Header