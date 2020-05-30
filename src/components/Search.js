import React, { Component } from 'react';
import { Form, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class Search extends Component {
  state = {
    searchInput: '',
  };

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Make ajax request here
    fetch(`https://api.npms.io/v2/search?q=${this.state.searchInput}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.props.setPackages(data.results);
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { searchInput } = this.state;
    return (
      <div className='my-3'>
        <Form onSubmit={this.handleSubmit}>
          <InputGroup>
            <Input
              value={searchInput}
              onInput={this.handleChange}
              placeholder='Search for any npm package here'
            />
            <InputGroupAddon addonType='append'>
              <Button style={{ backgroundColor: '#4052B6' }} type='submit'>
                Search
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default Search;
