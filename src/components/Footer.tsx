import classes from './Footer.module.css'
import emailIcon from "../assets/email-icon.svg"
import githubIcon from "../assets/github-icon.svg"
import linkedInIcon from "../assets/linkedin-icon.svg"


export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.separator} />
      <div className={classes.horizontal}>
        <p>Let's connect!</p>
        <span>&#8212;</span>
        <div className={classes.connectIcons}>
          <img src={linkedInIcon} alt="LinkedIn icon"/>
          <img src={emailIcon} alt="Email icon"/>
          <img src={githubIcon} alt="GitHub icon"/>
        </div>
      </div>
    </div>
  )
}