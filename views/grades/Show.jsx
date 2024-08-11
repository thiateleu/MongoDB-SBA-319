const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const grade = this.props.grade;

        return (
            <DefaultLayout title="Show an Individual grade">
                <p>The {grade.name} is {grade.type} {grade.score}</p>
                {grade.pass ? "It is pass" : "NOT READY!"}
                <br />
                <a href={`/grades/${grade._id}/edit`}>Edit This grade</a>
                <form action={`/grades/${grade._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/grades">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;