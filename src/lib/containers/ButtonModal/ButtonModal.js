import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button }from '../../components/Button/Button';

class ButtonModal extends PureComponent {

    render() {
        return (
            <Button className="btn__modal">
                Вывести
            </Button>
        )
    }
}

const mapStateToProps = state => {
    return ({

    })
};

const mapDispatchToProps = dispatch => {
    return ({

    })
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonModal);
