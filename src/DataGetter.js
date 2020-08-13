import React, { Component } from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Filter,
  Group, GroupSettingsModel, Edit, EditSettings, EditSettingsModel,
  Toolbar, ToolbarItems
} from '@syncfusion/ej2-react-grids';
//import data from './db.json';
//import {DataManager, ODataAdaptor, Query} from '@syncfusion/ej2-data';
import { DialogFormTemplate } from './DialogFormTemplate';
import './App.css';
import axios from 'axios';
import { IOrderModel } from './orderModel';

class DataGetter extends Component {

  constructor(props) {
    super(props)
    this.state = { data: [] };
  }

  componentDidMount() {
    let getData = axios.get('http://localhost:5000/repdata')
      .then((response) => { console.log("response===", response.data); this.setState({ ...this.state, data: response.data }); return response.data; })
      .catch(err => { throw err });

  }

  dialogTemplate = (props) => {
    return (<DialogFormTemplate {...props} />);
  }

  render() {
    var editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: this.dialogTemplate };
    var toolbarOptions = ['Add', 'Edit', 'Delete'];

    // console.log('This data ====', getData);

    return (

      <div style={{ margin: '10%', marginTop: '5%' }}>
        <GridComponent dataSource={this.state.data}
          allowPaging={true}
          pageSettings={{ pageSize: 5 }}
          allowFiltering={true}
          allowGrouping={true}
          editSettings={editOptions}
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            <ColumnDirective field='id' headerText='Id' textAlign='Left' width='50' />
            <ColumnDirective field='name' headerText='Rep Name' />
            <ColumnDirective field='email' headerText='Email' />
            <ColumnDirective field='representativeRegion' headerText='Region' editType='dropdownedit' />
            <ColumnDirective field='representativeHq' headerText='HQ' editType='dropdownedit' />
            <ColumnDirective field='representativeArea' headerText='Area operating' editType='dropdownedit' />
            <ColumnDirective field='customerName' headerText='Customer' />
            <ColumnDirective field='customerPincode' headerText='Customer PIN' />
            <ColumnDirective field='customerPhone' headerText='Customer CONTACT' />
          </ColumnsDirective>
          <Inject services={[Page, Filter, Group, Toolbar, Edit]} />
        </GridComponent>
      </div>
    );
  }
}

export default DataGetter;