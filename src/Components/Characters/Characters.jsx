import React, {useEffect, useState} from 'react';
import { fetchData } from '../../services/api';
import { Box, Grid, styled, Tooltip, Typography } from '@mui/material';

const Images = styled('img')(() => ({
    width:"100%",
    height:"300px",
    objectFit:"cover",
    border:"4px solid #000",
    cursor: "pointer",
}))

const Characters = ({text}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = async () => {
          const response = await fetchData(text);
          console.log(response.data);
          setData(response.data);
      }
      getData();
    }, [text])
    

  return (
    <Box style={{margin:"6rem 1rem 2rem"}}>
        <Grid container spacing={2}>
        {
                data.map((character) => (
                    <Grid item xs={2}>
                        <Tooltip title={
                            <Box style={{padding:"10px"}}>
                                <Typography>Name: {character.name}</Typography>
                                <Typography>NickName: {character.nickname}</Typography>
                                <Typography>Birthday: {character.birthday}</Typography>
                                <Typography>Status: {character.status}</Typography>
                                <Typography>Portrayed: {character.portrayed}</Typography>
                                <Typography>Category: {character.category}</Typography>
                            </Box>
                            
                        } arrow placement='top' >
                        <Images src={character.img} alt="" />
                        </Tooltip>
                    </Grid>
                ))
            }
        </Grid>  
    </Box>
  )
}

export default Characters