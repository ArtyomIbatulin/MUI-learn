import { Stack, Button } from "@mui/material"

export const MuiButton = () => {
  return (
    <div>
        <Stack 
         justifyContent="center"
         alignItems="center"
         spacing={3}>
            <Stack direction="row" spacing={2}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            </Stack>


            <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="error">error</Button>
            <Button variant="contained" color="info">info</Button>
            <Button variant="contained" color="success">success</Button>
            <Button variant="contained" color="warning">warning</Button>
            </Stack>

            <Stack direction="row" spacing={2}>
                <Button variant='contained' color='primary' size='small'>small</Button>
                <Button variant='contained' color='primary' size='medium'>medium</Button>
                <Button variant='contained' color='primary' size='large'>large</Button>
            </Stack>
        </Stack>
    </div>
  )
}
