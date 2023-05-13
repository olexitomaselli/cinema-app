import React from 'react'

export const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="navbar d-flex">
                        <ul className="navbar-elemnt">
                            <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
