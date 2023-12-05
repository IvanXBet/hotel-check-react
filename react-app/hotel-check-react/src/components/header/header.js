import './header.scss';

import btnOut from '../../resources/icons/btn/btn-out.svg';
const Header = () => {
    return (
        <section className="header">
            <h1 className="header__title">Simple Hotel Check</h1>
            <div className="header__out">
                <div>Выйти</div>
                <img src={btnOut} alt="out" />
            </div>
        </section>
    );
}

export default Header;