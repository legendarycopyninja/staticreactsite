

export default function Header() {
    return (
        <div className="header">
            <img src="profile.jpg" alt="dilli profile picture" className="profilepic" />
            <div className="devinfo">
                <h2>Dilli Rao D</h2>
                <h3>Front-End Developer</h3>
                <h4>TCS - CHENNAI</h4>
                <a href="tel:+918870142198">
                <i class='fas fa-phone'></i>
                    </a>
            </div>
            <div className="btn">
            <a href="mailto:dilliwebdev218@gmail.com" target="_blank" rel="noopener noreferrer" >
                <button  className="email"><img src="/src/assets/mail.png" alt="email" />Email</button>
            </a>
            <a href="https://www.linkedin.com/in/dilli-rao-dadi-578493180/" target="_blank" rel="noopener noreferrer" >
                 <button className="linkedin"> <img src="linkedin.png" alt="linkedin" />LinkedIn</button>
            </a>

            </div>
        </div>
    )
}