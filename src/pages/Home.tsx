import {Button} from "@mui/material";
import {motion} from "framer-motion";

export default function Home() {

  return (
    <div id="main-home">
      <div id="intro">
        <hr/>
        <header>I'm Mike Phan, a Software Engineer</header>
        <p>Specializing in mobile application development for iOS and web</p>
        <motion.div
          whileHover={{
            transformOrigin: "left",
            scale: 1.05,
            color: "#F2921D"
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <Button variant="contained" color="inherit">Get in touch!</Button>
        </motion.div>
      </div>
      <div id="splash">What to add here? Image? something</div>
    </div>
  )
}