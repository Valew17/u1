import React from 'react';

export default class WelcomeModal extends React.Component {

    constructor (props) {

        super(props);

        this.state = {
            display: false,
        };

    }

    render() {

        let box = '';

        if (this.state.display) {
            box = <div className="modal">
                Добро пожаловать в Блог!
                <div onClick={() => {
                    this.setState(
                        {
                            display: false,
                        }
                    );
                }}  className="modalClose">Закрыть</div>
            </div>;
        }

        return box;

    }

    componentDidMount() {

        this.setState(
            {
                display: true,
            }
        );

    }

}