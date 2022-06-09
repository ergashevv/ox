import Bgck from '../../assets/images/home-dark.png'
const Home = () => {
    return (
        <>
            <section className="info-site load-anim">
                <div className="info-inner container">
                    <h1 className="field">Комплексная автоматизация <br /> <span className="type"></span></h1>
                    <p className="info-i">
                        CRM, ERP, HRM, E-COMMERCE СИСТЕМА <br />
                        Весь цикл автоматизации работы ритейл торговли, создание и запуск собственного интернет-магазина и telegram-bot-магазина.
                    </p>
                    <img src={Bgck} alt="" />
                </div>
            </section>
        </>
    )
}

export default Home