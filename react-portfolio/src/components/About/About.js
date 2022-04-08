import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const About = () => {
    return (
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>Paragraph: Who I am</p>
          <p>Paragraph: Experience/backround</p>
          <p>Paragraph: Closing</p>
        </div>
      </div>
    )
}

export default About