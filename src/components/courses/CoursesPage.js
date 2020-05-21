import React, { Fragment } from "react";

export default class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    console.log(this.state.course);
    this.setState({ course });
    console.log(course);
  };

  handleSubmit = () => {
    alert(this.state.course.title);
  };

  render() {
    return (
      <Fragment>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="save" />
        </form>
      </Fragment>
    );
  }
}
