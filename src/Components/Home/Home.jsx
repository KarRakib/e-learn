import React from 'react';
import OfferBanner from './OfferBanner';
import { Banner } from './Banner';
import Book from './Book';




const Home = () => {
    const books = [
        {id:1,price:"1500৳", description:'পদার্থবিজ্ঞান ১ম পত্র ', title:'এইস এ সি ২৪', img:'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'},
        {id:2,price:"1500৳", description:'পদার্থবিজ্ঞান ২য় পত্র ', title:'এইস এ সি ২৪', img:'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'},
        {id:3,price:"1500৳", description:'জীববিজ্ঞান ১ম পত্র ', title:'এইস এ সি ২৪', img:'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'},
        {id:4,price:"1500৳", description:'জীববিজ্ঞান ২য় পত্র ', title:'এইস এ সি ২৪', img:'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'},
        {id:5,price:"1500৳", description:'রসায়ন ১ম পত্র ', title:'এইস এ সি ২৪', img:'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'},
        {id:6,price:"1500৳", description:'রসায়ন ২য় পত্র ', title:'এইস এ সি ২৪', img:'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'},
        {id:7,price:"1500৳", description:' উচ্চতর গণিত ১ম পত্র ', title:'এইস এ সি ২৪', img:'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'},
        {id:8,price:"1500৳", description:'উচ্চতর গণিত ২য় পত্র ', title:'এইস এ সি ২৪', img:'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'}
]
    return (
        <div>
            <OfferBanner></OfferBanner>
            <Banner/>
           <div className='grid grid-cols-2 md:grid-cols-4 gap-5 py-6'>
           {books.map((book,ind)=><Book book={book} key={ind}/>) }
           </div>
           
        </div>
    );
}

export default Home;
