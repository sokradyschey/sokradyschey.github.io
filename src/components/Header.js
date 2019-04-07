import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, I'm <strong>Sokrady</strong>!<br /></h1>
                    <h2>A Front-End Developer at Brand Llama.</h2>
                    <h3>I love riding my motorcycle, hiking, snowboarding, or cuddling with my dog, Teddy!</h3>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">About Sokrady</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
