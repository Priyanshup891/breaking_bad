import React, {useEffect, useState} from 'react';
import { fetchData } from '../../services/api';
import { Box, Grid, styled } from '@mui/material';

const Images = styled('img')(() => ({
    width:"100%",
    height:"300px",
    objectFit:"cover",
    border:"4px solid #000",
}))

const Characters = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = async () => {
          const response = await fetchData();
          console.log(response.data);
          setData(response.data);
      }
      getData();
    }, [])
    

  return (
    <Box style={{margin:"6rem 1rem 2rem"}}>
        <Grid container spacing={2}>
        {
                data.map((character) => (
                    <Grid item xs={2}>
                        <Images src={character.img} alt="" />
                    </Grid>
                ))
            }
        </Grid>  
    </Box>
  )
}

export default Characters