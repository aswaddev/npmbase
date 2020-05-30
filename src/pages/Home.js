import React, { Component } from 'react';
import Search from '../components/Search';

import { Card, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';

class Home extends Component {
  state = {
    packages: [],
  };

  setPackages = (packages) => {
    this.setState({ packages });
    return;
  };

  render() {
    const { packages } = this.state;
    return (
      <div>
        <Search setPackages={this.setPackages} />
        {packages.length > 0 ? (
          packages.map((packageData) => (
            <Card className='mb-2'>
              <CardBody>
                <CardTitle className='h2'>{packageData.package.name}</CardTitle>
                <CardSubtitle>
                  <span className='text-bold'>Author:</span>{' '}
                  {packageData.package.author
                    ? packageData.package.author.name
                    : 'Unknown'}
                </CardSubtitle>
                <CardText>{packageData.package.description}</CardText>
                <a
                  className='btn btn-danger'
                  href={packageData.package.links.npm}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Open NPM
                </a>
              </CardBody>
            </Card>
          ))
        ) : (
          <h3 className='text-center col-md-12 justify-content-center'>
            Search a package
          </h3>
        )}
      </div>
    );
  }
}

export default Home;
