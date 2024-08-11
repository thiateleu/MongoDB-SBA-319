const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New grade'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/grades' method="POST">
                StudentName: <input type="text" name="studentName" /><br />
                    Type: < input type="text" name="type"/> <br />
                    Score: <input type="text" name="score"/><br/>
                    Pass: <input type="checkbox" name="pass"/> <br />
                    <input type="submit" name="" value="Create grade"/>
                </form>
            </DefaultLayout>
        )
    }
}



module.exports = New;