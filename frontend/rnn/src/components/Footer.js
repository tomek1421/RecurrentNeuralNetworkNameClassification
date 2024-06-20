import github from '../images/github.png'
import gitlab from '../images/gitlab.png'
import linkedin from '../images/linkedin.png'

export default function Footer() {

    return (
        <div className="footer" >
            <h3>Stay connected and explore more</h3>
            <div className="socials" >
                <a href="https://github.com/tomek1421" >
                    <img src={github} alt="github" />
                </a>
                <a href="https://gitlab.com/tomek_1421" >
                    <img src={gitlab} alt="githlab" />
                </a>
                <a href="https://www.linkedin.com/in/tomek-wojciechowski-632564313/" >
                    <img src={linkedin} alt="linkedin" />
                </a>
            </div>
        </div>
    )
}