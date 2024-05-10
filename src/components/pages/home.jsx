import "../../assets/home.css";
import Navbar from "../fragments/navbar";
import Footer from "../fragments/footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
    const location = useLocation()

    useEffect(() => {
            document.querySelectorAll('.wrapper-container-bottom-text').forEach(el => {
                el.classList.remove('unseen')
            })
            document.querySelectorAll('.wrapper-home-header-img').forEach(el => {
                el.firstElementChild.classList.remove('unseen')
            })
            document.querySelector('.container-top .container-left-top p').classList.remove('unseen')
            document.querySelector('header .container-left-top h1').firstElementChild.classList.remove('unseen')
            console.log(document.querySelector('header .container-left-top h1').firstElementChild);
            // type effect
            const dynamicText = document.querySelector("header .container-left-top h1 .typeEffect");
            const words = "Sneakers";
            let charIndex = 0;
            let thePrintWords = ""
            const typeEffect = () => {
                thePrintWords += words[charIndex]
                dynamicText.textContent = thePrintWords;
                if (charIndex < words.length -1) {
                    charIndex++;
                    setTimeout(typeEffect, 300);
                }
            }
            typeEffect();
      }, [location.pathname]);

    return(
        <>
        <Navbar />
        <header>
            <div className="wrapper-header">
                <div className="container-top d-flex">
                    <div className="container-left-top p-5 d-flex justify-content-center align-items-start">
                        <h1><span className="unseen">Find Your</span><br /><span className="typeEffect">S</span></h1>
                        <p className="unseen">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel dolorem illo libero doloremque ipsa quidem. Fuga est quas illum labore</p>
                    </div>
                    <div className="container-right-top position-relative d-flex align-items-center justify-content-center">
                        <div className="wrapper-home-header-img-text">
                            <a href="/shoes/NikeDunkLow" className="position-absolute">Nike Dunk Low</a>
                        </div>
                        <div className="wrapper-home-header-img position-absolute"><img className="unseen" src="./header-home1.png" alt="" /></div>
                        <div className="wrapper-home-header-img position-absolute"><img className="unseen" src="./header-home2.png" alt="" /></div>
                    </div>
                </div>
                <div className="container-bottom d-flex justify-content-around">
                    <span className="d-flex align-items-center wrapper-container-bottom-text unseen">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                        </svg>
                        <span className="container-bottom-text">
                            <h5>Fast Delivery</h5>
                            <p>Lorem lorem lorem</p>
                        </span>
                    </span>
                    <span className="d-flex align-items-center wrapper-container-bottom-text unseen">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-hourglass-split" viewBox="0 0 16 16">
                            <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                        </svg>
                        <span className="container-bottom-text">
                            <h5>24 / 7 Support</h5>
                            <p>lorem lorem lorem</p>
                        </span>
                    </span>
                    <span className="d-flex align-items-center wrapper-container-bottom-text unseen">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                            <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                        </svg>
                        <span className="container-bottom-text">
                            <h5>Secure Payment</h5>
                            <p>lorem lorem lorem</p>
                        </span>
                    </span>
                </div>
            </div>
        </header>
        <Footer />
        </>
    )
}
