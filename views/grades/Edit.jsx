//grades/Edit.jsx
const React = require('react');

const DefaultLayout = require('../layout/Default')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form action={`/grades/${this.props.grade._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="studentName" defaultValue={this.props.grade.studentName}/><br/>
          Color: <input type="text" name="type"  defaultValue={this.props.grade.type}/><br/>
          Quantity: <input type="text" name="score"  defaultValue={this.props.grade.score}/><br/>
          Is for Eat:
              { this.props.grade.pass? <input type="checkbox" name="pass" defaultChecked />: <input type="checkbox" name="pass"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;