const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New plant'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/plants' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Color: < input type="text" name="color"/> <br />
                    Quantity: <input type="text" name="forEat"/><br/>
                    Is for Eat: <input type="checkbox" name="forEat"/> <br />
                    <input type="submit" name="" value="Create plant"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;