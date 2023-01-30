

export default function Header() {
    return (
        <div className="header">
            <img src="./src/assets/5597.jpg" alt="dilli profile picture" className="profilepic" />
            <div className="devinfo">
                <h2>Dilli Rao Dadi</h2>
                <h3>Front End Web Developer</h3>
                <h4>TCS - Chennai</h4>
            </div>
            <div className="btn">
            <button className="email"><img src="./src/assets/Mail.png" alt="email" /> Email</button>
            <button className="linkedin"> <img src="./src/assets/linkedin.png" alt="linkedin" /> LinkedIn</button>
            </div>
        </div>
    )
}