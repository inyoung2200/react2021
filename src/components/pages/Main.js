import React from 'react';
import Header from '../Header';
import Layout from '../Layout';

function Info({text1, text2, text3, text4}){
    return (
        <div className="main_cont">
            <div>{text1}</div>
            <div>{text2}</div>
            <div>{text3}</div>
            <div>{text4}</div>
        </div>
    );
}

function Main(){
    return (
        <div id="wrap">
            <Header />
            <Layout>
                <section id="mainCont">
                    <Info text1="We provide" text2="visual Coding" text3="solutions" text4="for yoe webs" />
                </section>
            </Layout>
        </div>
    );
}

export default Main;