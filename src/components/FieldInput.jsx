import React from 'react'
import { TextField, Button, Box } from '@mui/material';

const FieldInput = ({ onClickChangeId, inputValue, onChangeInput, photos }) => {
    return (
        <>
            <Box className="photos__container" style={{ width: 1000, margin: 0, margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box>
                    <TextField
                        id="standard-number"
                        label="ID ALBUM"
                        type="number"
                        value={inputValue}
                        onChange={e => onChangeInput(e.target.value)}
                        variant="standard"
                        size='small'
                        style={{ marginRight: 15 }}
                        error={photos[0].inputError}
                        helperText={photos[0].inputError ? 'Enter ID from 1 to 100' : 'Enter ID from 1 to 100'}
                    />
                    <Button variant="contained" size="small"
                        onClick={onClickChangeId}
                        disabled={photos[0].disabled}
                    >GET PHOTOS</Button>
                </Box>
            </Box>
        </>
    )
}

export default FieldInput;