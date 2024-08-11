const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { grades } = this.props;
        // const grades = this.props.grades;

        return (
            <DefaultLayout title={"grades Index Page"}>
                <nav>
                    <a href="/grades/new">Create a New grade</a>
                </nav>
                <ul>
                    {grades.map((grade, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/grades/${grade._id}`}>
                                    {grade.name}
                                </a> {' '}
                                is {grade.color} {grade.quantity} <br></br>
                                {grade.pass
                                ? `It is pass`
                            :   `It is NOT pass`}
                            <br />
                            <a href={`/grades/${grade._id}/edit`}>Edit This grade</a>
                            <form action={`/grades/${grade._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;