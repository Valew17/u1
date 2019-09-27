import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Menu from './Menu';


class App extends React.Component {

    render() {

        let menu = [
            {
                name: 'Главная',
                url: '/',
            },
            {
                name: 'Уроки',
                url: '/lessons',
            },
            {
                name: 'Практика',
                url: '/trud',
            },
            {
                name: 'Компоненты',
                url: '/components',
            },
            {
                name: 'Контакты',
                url: '/contact',
            }
        ]

        return <div>
            <h1>Сервис по ReactJS</h1>
            <Login />
            <Menu info={menu}/>
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));