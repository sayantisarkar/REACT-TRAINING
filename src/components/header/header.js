import React from "react";

class Header extends React.Component {
    render() {
        return (
            <section style={{
                backgroundColor: 'lightgray', display: 'inline-flex', width: '100%'
            }}>
                < img src="https://licindia.in/CorporateSiteDemo/media/LIC_Media/LIC_LOGO_1.png" alt="Logo of the LIC" width="200" />
                <div style={{ display: 'inline-block', padding: '5px' }}>
                    <h1>LIC INDIA</h1>
                    <h4>Zindagi ke sath bhi, Zindagi ke baad bhi</h4>
                </div>
            </section>
        )
    }
}

export default Header;