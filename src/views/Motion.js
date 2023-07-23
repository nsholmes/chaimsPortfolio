import { Box } from "@material-ui/core"
import './Motion.css'

function Motion() {
  return (
    <div>
      <h1>Motion</h1>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: '60px',
        height: '90vh'
      }}>
        <div>
          <iframe
            width="650"
            height="405"
            src="https://www.youtube.com/embed/C5EcF7ZsFWs"
            title="YouTube video player" frameborder="10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <p>Culmination of most of my video projects</p>
        </div>
        <div>
          <iframe
            width="650"
            height="405"
            src="https://www.youtube.com/embed/enF0_djdhSY"
            title="YouTube video player" frameborder="10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <p>
            The incredible life story of Sophie Binder - Short reel (full version premieres May 2023)
          </p>
        </div>
      </Box>
    </div>
  )
}

export default Motion