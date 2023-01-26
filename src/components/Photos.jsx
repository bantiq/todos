import React, { useState } from 'react';
import PhotoData from '../components/PhotoData';
import FieldInput from './FieldInput';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeId, changeInputError, changeVisible, setData } from '../redux/photos-reducer';


const Photos = () => {
    const [inputValue, setInputValue] = useState('')
    const photos = useSelector((state) => state.photosPage)
    const dispatch = useDispatch()
    
    const onChangeInput = (e) => {
        setInputValue(e)
        dispatch(changeVisible(e))
        dispatch(changeInputError(e))
    }

    const onClickChangeId = () => {
        dispatch(changeId(inputValue))
    }

    const addAlbum = (obj) => {
        dispatch(setData(obj))
    }

    return (
        <Box>
            <Button variant="outlined">
                <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}>Go Home</Link>
            </Button>

            <Box className="photos__container" style={{ width: 1000, margin: 0, margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FieldInput onChangeInput={onChangeInput} onClickChangeId={onClickChangeId} photos={photos} />
                {photos[0].data == false
                    ? <h2>ALBUM MISSING</h2>
                    : <PhotoData photos={photos} addAlbum={addAlbum} />
                }
            </Box>
        </Box>
    )
}


export default Photos;  