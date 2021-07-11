import React from 'react';
import { DialogItem } from '../../components'

import './Home.scss';

const Home = () => (
    <section className="home">
        <div className="dialogs">
            <DialogItem 
                user={{
                    fullName: "Федор Достоевский",
                    isOnline: false
                }} 
                unreaded={10} />
        </div>
        {/* <Dialogs items={[
            {
                user: {
                    fullname: 'Vage Igityan',
                    avatar: null
                },
                message: {
                    text: "Everybody's a gangsta, till they meet me",
                    isReaded: false,
                    created_at: new Date()
                }
            }
        ]} */}
        {/* <Message
            avatar="http://www.corporacia.ru/_data/pages/0001451/52149.jpg"
            text="Hello Hello Hello Hello Hello HelloHelloHelloHello Hello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello Hello"
            date={new Date(2021,6,3)}
            attachments={[
                {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random-1&nature,water'
                },
                {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random-2&nature,water'
                },
                {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random-3&nature,water'
                }
            ]} />
        <Message
            avatar="http://www.corporacia.ru/_data/pages/0001451/52149.jpg"
            text="Yoooo maan"
            date={new Date(2021,6,3)}
            isMe={true}
            isReaded={false} />
        <Message
            avatar="http://www.corporacia.ru/_data/pages/0001451/52149.jpg" 
            attachments={[
                {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random-3&nature,water'
                }
            ]} />
        <Message
            avatar="http://www.corporacia.ru/_data/pages/0001451/52149.jpg" 
            isTyping /> */}
    </section>
);

export default Home;
