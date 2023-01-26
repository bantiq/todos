import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import ShowPhotos from './ShowPhotos'

const PhotoData = ({ addAlbum, photos }) => {

    useEffect(() => {
        addAlbum(null)
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${photos[0].id}`)
            .then(res => res.json())
            .then(
                (result) => addAlbum(result),
                (e) => console.warn('fetch failure', e)
            )
    }, [photos[0].id])

    return (
        <Box>
            <ShowPhotos data={photos[0].data} />
        </Box>
    )
}

export default PhotoData;