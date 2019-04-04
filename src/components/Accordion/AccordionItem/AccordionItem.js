import React, { Component } from 'react';

class AccordionItem extends Component {
    state = {
        open: false
    }

    toggleHandler = () => {
        this.setState(prevState => ({ open: !prevState.open }))
    }

    render() {
        let accordionItemClass = ["accordion__item"];
        let accordionContentClass = ["accordion__content"];
        let accordionArrowClass = ["accordion__arrow"];

        if (this.state.open || this.props.open) {
            accordionItemClass.push("accordion__item--open");
            accordionContentClass.push("accordion__content--open");
            accordionArrowClass.push("accordion__arrow--active");
        }

        return (
            <li className={accordionItemClass.join(" ")} >
                <button
                    className="accordion__heading"
                    onClick={() => {
                        this.toggleHandler();
                        this.props.onHeadingClick(this.props.id);
                    }}>
                    <div className={accordionArrowClass.join(" ")}>&gt;</div>
                    <div className="accordion__title">
                        {this.props.title}
                    </div>
                </button>
                <div
                    className={accordionContentClass.join(" ")}
                    onClick={this.props.onContentClick.bind(this, this.props.id)} >
                    {this.props.children}
                </div>
            </li>
        );
    }
}

export default AccordionItem;