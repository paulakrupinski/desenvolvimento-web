import { useState, useEffect } from "react";

import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import HeroImage from "../assets/imagem_hero.png";

import Button from "../components/Button.tsx";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";

import IconeAroma from "../assets/icone_aroma.svg";
import IconeNature from "../assets/icone_nature.svg";
import IconePresente from "../assets/icone_presente.svg";
import "../styles/solution.css";
import Card from "../components/Card.tsx";
import "../styles/testimonials.css";
import Cliente1 from "../assets/cliente1.jpeg";
import Cliente2 from "../assets/cliente2.jpeg";
import Cliente3 from "../assets/cliente3.jpeg";
import Star from "../assets/star.png";
import TestimonialCard from "../components/TestimonialCard.tsx";
import Check from "../assets/check.svg";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";

import Instagram from "../assets/instagram.png";
import Youtube from "../assets/youtube.png";
import Facebook from "../assets/facebook.png";
import ContactForm from "../components/ContactForm";

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");

        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }

        return () => {
            if (html) {
                html.style.overflow = "auto";
            }
        };
    }, [showMobileMenu]);

    return (
        <>
            <div className="header-bg">
                <header className="container py-sm">

                    <nav className="flex items-center justify-between">

                        <img
                            src={Logo}
                            alt="Logo Aromas artesanais"
                            width={160} height={40}
                        />

                        <div className="desktop-only">
                            <ul className="flex gap-1">
                                <li><a href="#">Home</a></li>
                                <li><a href="#solution">Soluções</a></li>
                                <li><a href="#testimonials">Depoimentos</a></li>
                                <li><a href="#pricing">Preços</a></li>
                                <li><a href="#contact">Contato</a></li>
                            </ul>
                        </div>

                        <div className="desktop-only">
                            <div className="flex items-center">
                                <a className="reverse-color ml-lg" href="">Login</a>
                                <Button text="Cadastre-se" />
                            </div>
                        </div>

                        <div className="mobile-menu">
                            {showMobileMenu ? (
                                <div className="mobile-menu-content">
                                    <div className="container flex">
                                        <ul>
                                            <li>
                                                <a
                                                    href="#"
                                                    onClick={() => setShowMobileMenu(false)}
                                                >
                                                    Home
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#solution"
                                                    onClick={() => setShowMobileMenu(false)}
                                                >
                                                    Soluções
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#testimonials"
                                                    onClick={() => setShowMobileMenu(false)}
                                                >
                                                    Depoimentos
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#pricing"
                                                    onClick={() => setShowMobileMenu(false)}
                                                >
                                                    Preços
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#contact"
                                                    onClick={() => setShowMobileMenu(false)}
                                                >
                                                    Contato
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="reverse-color"
                                                    href="#"
                                                    onClick={() => setShowMobileMenu(false)}
                                                >
                                                    Login
                                                </a>
                                            </li>
                                        </ul>
                                        <span
                                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                                            className="btn-wrapper"
                                        >
                                            <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <span
                                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    className="btn-wrapper"
                                >
                                    <img src={Menu} alt="ícone menu" width={24} height={24} />
                                </span>
                            )}
                        </div>

                    </nav>

                </header>
            </div>

            <section id="hero">

    <div className="hero-content">
        <span className="hero-tag">FEITO À MÃO, COM AMOR</span>
        <h1>Aromas que transformam ambientes</h1>
        <p>Velas artesanais produzidas com ingredientes de qualidade para tornar seus momentos mais especiais e acolhedores.</p>
        
        <div className="hero-buttons flex gap-1">
            
            <span>
                <a href="#pricing">
                    <Button text="Conhecer Produtos" />
                </a>
            </span>
            
           
            <span className="desktop-only">
                <a href="#contact">
                    <Button text="Fale Conosco" secondary />
                </a>
            </span>
        </div>
    </div>

    <div className="hero-image">
        <img src={HeroImage} alt="Velas aromáticas artesanais" />
    </div>

</section>

            <section className="container" id="solution">

                <header>
                    <span>
                        <h2> <strong>Nossos Diferenciais</strong> </h2>
                        <span className="desktop-only">
                            <h2>Feitas para tornar cada momento especial</h2>
                        </span>
                    </span>
                    <p>
                        Nossas fragrâncias foram pensadas para despertar sensações, decorar ambientes e tornar cada momento memorável.
                    </p>
                </header>

                <section className="even-columns">

                    <Card
                        icon={IconeAroma}
                        title="Aromas Exclusivos"
                        description="Fragrâncias cuidadosamente selecionadas para criar sensações únicas e transformar ambientes."
                    />

                    <Card
                        icon={IconeNature}
                        title="Produção Artesanal"
                        description="Cada vela é feita à mão com atenção aos detalhes e muito carinho em cada etapa."
                    />

                    <Card
                        icon={IconePresente}
                        title="Presente Perfeito"
                        description="Embalagens delicadas e aromas marcantes para surpreender quem você ama."
                    />

                </section>
        </section>

        

<section id="testimonials">

    <header>
        <span>
            <p className="desktop-only">
                Conselho de quem conhece
            </p>

            <h2>Cada cliente importa!</h2>
        </span>

        <p>
            Descubra a experiência de quem já se encantou com nossas velas.
        </p>
    </header>

    <section className="carousel">

    <div className="carousel-content">

        <TestimonialCard
            image={Cliente1}
            testimony="A fragrância de lavanda deixou meu quarto muito mais aconchegante."
            name="Daniel Petrich"
            role="Cliente"
            stars={5}
            starIcon={Star}
        />

        <TestimonialCard
            image={Cliente2}
            testimony="Comprei para presentear e foi um sucesso. A embalagem é linda e o aroma permanece por horas."
            name="Paula Krupinski"
            role="Cliente"
            stars={5}
            starIcon={Star}
        />

        <TestimonialCard
            image={Cliente3}
            testimony="Dá para perceber o carinho colocado em cada vela. Minha sala ganhou outra atmosfera."
            name="Paulo Cesar"
            role="Cliente"
            stars={5}
            starIcon={Star}
        />

    </div>

    <div className="carousel-content">

        <TestimonialCard
            image={Cliente1}
            testimony="A fragrância de lavanda deixou meu quarto muito mais aconchegante."
            name="Daniel Petrich"
            role="Cliente"
            stars={5}
            starIcon={Star}
        />

        <TestimonialCard
            image={Cliente2}
            testimony="Comprei para presentear e foi um sucesso. A embalagem é linda e o aroma permanece por horas."
            name="Paula Krupinski"
            role="Cliente"
            stars={5}
            starIcon={Star}
        />

        <TestimonialCard
            image={Cliente3}
            testimony="Dá para perceber o carinho colocado em cada vela. Minha sala ganhou outra atmosfera."
            name="Paulo Cesar"
            role="Cliente"
            stars={5}
            starIcon={Star}
        />

    </div>

</section>

</section>

<section id="pricing" className="container">

    <header>
        <p className="desktop-only">Planos e preços</p>
        <h2>Nossos Kits</h2>
    </header>

    <section className="even-columns gap-1.5">

        {/* Kit Básico */}
        <div className="pricing-card">

            <span className="plan">
                <h3>Básico</h3>
                <p>Ideal para conhecer nossos aromas artesanais.</p>
            </span>

            <h2>R$ 39,90</h2>

            <Button text="Comprar Agora" secondary />

            <span className="hr"></span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>1 vela aromática</p>
            </span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>Embalagem presenteável</p>
            </span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>Escolha da fragrância</p>
            </span>

        </div>

        {/* Kit Premium */}
        <div className="pricing-card premium">

            <span className="bonus">
                <p>MAIS VENDIDO</p>
            </span>

            <span className="plan">
                <h3>Premium</h3>
                <p>Perfeito para transformar ambientes e presentear.</p>
            </span>

            <span className="price">
                <h2>R$ 89,90</h2>
            </span>

            <Button text="Comprar Agora" />

            <span className="hr"></span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>3 velas aromáticas</p>
            </span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>Fragrâncias exclusivas</p>
            </span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>Embalagem premium</p>
            </span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>Brinde especial</p>
            </span>

        </div>

        {/* Kit Luxo */}
        <div className="pricing-card">

            <span className="plan">
                <h3>Luxo</h3>
                <p>Experiência completa para amantes de aromas.</p>
            </span>

            <h2>R$ 149,90</h2>

            <Button text="Comprar Agora" secondary />

            <span className="hr"></span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>5 velas aromáticas</p>
            </span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>Fragrâncias exclusivas</p>
            </span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>Caixa especial para presente</p>
            </span>

            <span className="features">
                <img src={Check} alt="check" width={24} height={24} />
                <p>Cartão personalizado</p>
            </span>

        </div>

    </section>

</section>

<section id="contact" className="container">

    <header>
        <p>Envie sua dúvida</p>

        <h2>Entre em contato</h2>

        <span>
            Tem dúvidas sobre nossas velas artesanais,
            deseja fazer um pedido especial ou presentear alguém?
            Estamos prontos para ajudar.
        </span>
    </header>

    <ContactForm />

</section>

<footer id="footer">
    <div className="container footer-inner">

        <div className="footer-brand">
            <h3>Aromas Artesanais</h3>
            <p>Velas feitas à mão com amor.</p>
            <div className="footer-social">
                <span aria-label="Instagram">
                    <img src={Instagram} alt="Instagram" width={20} height={20} />
                </span>
                <span aria-label="Youtube">
                    <img src={Youtube} alt="Youtube" width={20} height={20} />
                </span>
                <span aria-label="Facebook">
                    <img src={Facebook} alt="Facebook" width={20} height={20} />
                </span>
            </div>
        </div>

        <nav className="footer-links">
            <a href="#">Home</a>
            <a href="#solution">Soluções</a>
            <a href="#testimonials">Depoimentos</a>
            <a href="#pricing">Kits</a>
            <a href="#contact">Contato</a>
        </nav>

    </div>

    <div className="footer-copy">
        <p>© 2026 Aromas Artesanais — Todos os direitos reservados.</p>
    </div>

</footer>



        </>
    );
}