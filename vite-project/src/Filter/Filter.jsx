import React, { Component } from 'react'
import { images } from './Images'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'


export default class Portfolio extends Component {
    state = { selectedFilter: 'All' }

    handleSelectFilter = (filter) => {
        this.setState({ selectedFilter: filter }); 
    }

    render() {
      const { selectedFilter } = this.state;
      const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
      const filteredImages =
      selectedFilter === 'All'
        ? images
        : images.filter((image) => image.category === selectedFilter);

    return (
      <div>
         <Toolbar 
         filters={filters}
         selected={selectedFilter}
         onSelectFilter={this.handleSelectFilter}
         />
        <ProjectList images={filteredImages} />
      </div>
    )
  }
}

