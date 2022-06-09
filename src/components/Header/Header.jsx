import Logo from '../../assets/images/logo.svg'
import './main.scss'
import './response.scss'
import { useEffect } from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });
    const isSticky = () => {
        const header = document.querySelector(".header-wrapper");
        const scrollTop = window.scrollY;
        scrollTop >= 10
            ? header.classList.add("is-sticky")
            : header.classList.remove("is-sticky");
    };

    const RefreshPage = () => {
        setTimeout(() => window.location.reload(false), 300)
    }
    return (
        <div className="site-wrapper">
            <div className="for-bg">
                <div className="header-wrapper">
                    <div className="container header">
                        <div className="site-logo">
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className="navbar">
                            <ul>
                                <li>
                                    <Link to="/">
                                        Главная
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Решения
                                    </Link>
                                </li>
                                <li onClick={RefreshPage}>
                                    <Link to="products">
                                        Продукты
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/">
                                        Цены
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Полезное
                                    </Link>
                                </li>
                                <li className='login'>
                                    <Link to="/login">
                                        Войти
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header