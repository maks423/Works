import { Component } from "react";


class Search extends Component {

    onChangeHandler = (e) => {
         this.props.filter(e.target.value);
       
    }

    render() {
    return (
      <div className="mb-3">
        <label htmlFor="search" className="form-label">
        </label>
        <input
         placeholder="Search"
         onChange={this.onChangeHandler}
         type="search" className="form-control" id="search" />
      </div>
    );
  }
}

export default Search;
