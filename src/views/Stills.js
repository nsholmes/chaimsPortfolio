import { Box } from "@material-ui/core"

function Stills() {
  return (
    <div>
      Stills
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '60px'
      }}>
        <iframe
          width="650"
          height="405"
          src="https://www.youtube.com/embed/C5EcF7ZsFWs"
          title="YouTube video player" frameborder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <iframe
          width="650"
          height="405"
          src="https://www.youtube.com/embed/enF0_djdhSY"
          title="YouTube video player" frameborder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </Box>
    </div>
  )
}

export default Stills