const React = require("react");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { plants  } = this.props;
 

    return (
      <DefaultLayout title={"plants Index Page"}>
        <nav>
          <a href="/plants/new">Create a New plant</a>
        </nav>
        <ul>
          {plants.map((plant, i) => {
            return (
              <li>
                The{" "}
                <a href={`/plants/${plant._id}`}>{plant.name}</a> is{" "}
                {plant.color}  {plant.forEat}<br></br>
                {plant.forEat
                  ? `It is for eat`
                  : `It is NOT for eat`}
                <br />
                <a href={`/plants/${plant._id}/edit`}>
                  Edit This plant
                </a>
                <form
                  action={`/plants/${plant._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;