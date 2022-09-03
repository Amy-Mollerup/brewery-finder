import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Brewer_Dashboard() {
    return (
        <>
            <Header />
            <div className='container'>
                <section className='brewery-info'>
                    <img />
                    <h3>Brewery Information</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </section>
                <section className="beer">
                    <img />
                    <h3>Beer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </section>
                <section>
                    <img />
                    <h3>Beer Lovers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </section>
                
            </div>
            <Footer />
        </>
    )
}