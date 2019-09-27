import React from 'react';

export default class Login extends React.Component {

    render() {
        return <div>
            Добро пожаловать в сервис.
            <div>
                Логин:
                <input/>
            </div>
            <div>
                Пароль:
                <input/>
            </div>
            <div>
                <button>Войти</button>
            </div>
        </div>
    }
    
}