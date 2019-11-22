import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem, removeItem, selectItem, deselectItem } from '../ducks/groceries';

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';

const mapStateToProps = ({
  groceries: {
    list: groceryList,
    isItemSelected: selection,
    selectedItem : selected
  },
}) => ({
  groceryList,
  selection,
  selected
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem,
    removeItem,
    selectItem,
    deselectItem
  }, dispatch)
);

class ListContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      groceryList : [],
      isItemSelected : false,
      selectedItem : []
    }
  }

  componentWillMount() {
    /* eslint-disable no-console */
    //console.log('groceryList', this.props.groceryList, this);
    this.setState({
      groceryList: this.props.groceryList,
      selectedItem : this.props.selected
    })
  }

  componentWillReceiveProps(nextProps) {
    // console.log('groceryList', nextProps.groceryList, this);
    this.setState({
      groceryList: nextProps.groceryList,
      isItemSelected: nextProps.selection,
      selectedItem : nextProps.selected
    })
  }


  render() {
    const { removeItem, selectItem, deselectItem, addItem } = this.props
    const { groceryList, isItemSelected, selectedItem } = this.state
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={addItem} />
        </div>
        <div className="types">
          <ListSelection isItemSelected={isItemSelected} selectedItem={selectedItem} />
          <ListTable groceryList={groceryList} removeItem={removeItem} selectItem={selectItem} deselectItem={deselectItem} selectedItem={selectedItem} />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  // Other
};

const ListContainerRedux = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainerRedux;
