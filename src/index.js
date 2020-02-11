import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Header from './components/Header';
import Logo from './components/Logo';
import Card from './components/Card';
import Buttons_Share from './components/Footer';
import Footer from './components/Footer';
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"></link>



/**
 * <Card> main.scss // import header, hero, footer
 *      <header> ...header.scss
 *      <Hero>  .. hero.scss
 *      <Footer> ...footer.scss
 * </card>
 */

ReactDOM.render(
    <React.Fragment>
    <div className="left-side"> 
    <Logo />
    </div>

    <div className="right-side">
    <Header 
    mytitle ="The Practical Dev"
    info="@ThePraticalDev • Sep 10"
    subtitle ="Learning React? Star Small."
    author ="{ author "
    name_author= "@dceddia }"
    />


    <Card 
    title_card="Learning React? Star Small."
    text_card="Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps."
    link_card="dev.to"
    />

    <Footer
    comment=" 2 "
    share=" 47 "
    like=" 190 "
    message= ""
    />
  
</div>
    </React.Fragment>,
    document.getElementById('app')
    
);
module.hot.accept();