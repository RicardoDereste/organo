
import './footer.css'

const Footer = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src="/img/facebook.png" alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src="/img/twitter.png" alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="/img/instagram.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/img/logo.png" alt="" />
       </section>
       <section>
        <p>
            Developed by Ricardo
        </p>
       </section>
    </footer>)
}

export default Footer