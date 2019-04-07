import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://twitter.com/ticktocsocks44" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://www.instagram.com/sokratichewy/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/sokradyschey" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="mailto:sokradychey@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>Sokrady Chey &copy; 2019</li>
                    <li>Philadelphia, PA</li>
                    <li>Design: HTML5 UP</li>
                </ul>
            </section>
        )
    }
}

export default Footer
