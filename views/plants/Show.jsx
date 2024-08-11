const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const plant = this.props.plant;

        return (
            <DefaultLayout title="Show an Individual plant">
                <p>The {plant.name} is {plant.color} {plant.forEat} </p>
                {plant.forEat ? 'It is for eat' : "NOT READY!"}
                <br />
                <a href={`/plants/${plant._id}/edit`}>Edit This plant</a>
                <form action={`/plants/${plant._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/plants">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;