import { Grid } from '@mui/material'
import MemeBubble from './MemeBubble'

type Props = {}

const MemesGallery = (_props: Props) => {
  return (
    <>
    <Grid container justifyContent={"center"} mt={2}>
        {/* <Typography color={"azure"} variant="h2" textAlign={"center"}>
          Memes Gallery
        </Typography> */}
        <MemeBubble/>
      </Grid>
    </>
  )
}

export default MemesGallery