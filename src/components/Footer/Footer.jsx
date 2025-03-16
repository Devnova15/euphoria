import React from 'react';
import './Footer.css'
import Container from "../Container/Container.jsx";

const Footer = () => {
    const footerData = [
        {
            title: "Need Help",
            subTitles: ['Contact Us', 'Track Order', 'Returns & Refunds', 'FAQs', 'Career']
        },
        {
            title: "Company",
            subTitles: ['About Us', 'euphoria Blog', 'euphoriastan', 'Collaboration', 'Media']
        },
        {
            title: "More Info",
            subTitles: ['Term and Conditions', 'Privacy Policy', 'Shipping Policy', 'Sitemap']
        },
        {
            title: "Location",
            subTitles: ['support@euphoria.in', 'Eklingpura Chouraha, Ahmedabad Main Road', '(NH 8- Near Mahadev Hotel) Udaipur, India- 313002']
        }
    ];
    return (
        <Container>
        <div className={'footer-container'}>
            <div className={'footer-content__container'}>
                <div className={'footer-content-columns'}>
                    {footerData.map((column, index)=>(
                        <div key={index} className={'footer-column'}>
                            <h4 className={'column-title'}>{column.title}</h4>
                            <ul className={'column-subTitles'}>
                                {column.subTitles.map((subTitle, subIndex) => (
                                    <li key={subIndex} className={'column-subTitle'}>{subTitle}</li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

                <div className={'footer-links-container'}>
                    <a href="https://www.facebook.com/?locale=ru_RU">
                        <img className={'footer-link__img'} src="/Footer-Images/social-media.png" alt="FaceBook"/>
                    </a>
                    <a href="https://www.instagram.com">
                        <img className={'footer-link__img'} src="/Footer-Images/instagram.png" alt="Instagram"/>
                    </a>
                    <a href="https://x.com/?lang=ru">
                        <img className={'footer-link__img'} src="/Footer-Images/twitter.png" alt="Twitter"/>
                    </a>
                    <a href="https://ua.linkedin.com">
                        <img className={'footer-link__img'} src="/Footer-Images/linkedin-big-logo.png" alt="Linkedin"/>
                    </a>
                </div>

                <div className={'footer-copyright__container'}>
                    <p className={'footer-copyright-text'}>Copyright © 2025 Euphoria Folks Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Footer;