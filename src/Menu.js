import React from 'react';
import MenuLi from './MenuLi';

export default class Menu extends React.Component {
    render() {

        //создание элементов меню
        let menu = this.props.info.map(function (value, index) {
            return <MenuLi name={value.name} url={value.url} key={index}/>
        });

        return <div>
            <div>Меню</div>
            <ul>
                {menu}
            </ul>
        </div>

    }
}