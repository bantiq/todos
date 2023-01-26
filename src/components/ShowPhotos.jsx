import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const ShowPhotos = ({ data }) => {

    return (
        <Box className="showPhotos" >
            {data ? (
                <h3>
                    {data.map((item, key) =>
                        <Box className="showPhotos__titleAndImg" key={key.id}>
                            <Box className="showPhotos__title" style={{ textAlign: 'center', margin: 10 }} >{item.title}</Box>
                            <img src={item.url} alt="img placeholder" />
                        </Box>
                    )}
                </h3>
            ) : <CircularProgress />}
        </Box>
    )
}

export default ShowPhotos;