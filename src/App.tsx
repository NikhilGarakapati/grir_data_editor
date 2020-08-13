import React from 'react';
//import axios from 'axios';
import { 
  GridComponent, 
  ColumnDirective, 
  ColumnsDirective,
  Page, 
  Inject, 
  Filter,
  Group, GroupSettingsModel, Edit, EditSettings, EditSettingsModel, 
  Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
//import data from './db.json';
//import {DataManager, ODataAdaptor, Query} from '@syncfusion/ej2-data';
import {DialogFormTemplate} from './DialogFormTemplate';
import './App.css';
import axios from 'axios';
import { IOrderModel } from './orderModel';
import DataGetter from './DataGetter';


// const data = axios.get('http://localhost:5000/repdata')
// .then((response) => response.data)
// .catch(err => {throw err});

//  const getData = () => {
//   var x= axios.get(`http://localhost:5000/repdata`)
//     .then(json =>  json.data)
//     .catch(error => {
//       throw error;
//     });
//     console.log(x);
//     return x;
// };




const App: React.FC = () => {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode:'Dialog', template:dialogTemplate };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];


  function dialogTemplate(props: any) {
    return (<DialogFormTemplate {...props} />);
  }


  return (
    // <div style={{margin: '10%', marginTop:'5%'}}>
    //   <GridComponent dataSource={data}
    //     allowPaging={true}
    //     pageSettings={{pageSize:5}}
    //     allowFiltering={true}
    //     // query= {query
    //     allowGrouping={true}
    //     editSettings = {editOptions}
    //     toolbar = {toolbarOptions}
    //   >
    //     <ColumnsDirective>
    //     <ColumnDirective field='id' headerText='Id' textAlign='Left' width='50' />
    //     <ColumnDirective field='name' headerText='Rep Name'/>
    //     <ColumnDirective field='email' headerText='Email'/>
    //     <ColumnDirective field='representativeRegion' headerText='Region' editType='dropdownedit'/>
    //     <ColumnDirective field='representativeHq' headerText='HQ' editType='dropdownedit'/>
    //     <ColumnDirective field='representativeArea' headerText='Area operating' editType='dropdownedit'/>
    //     <ColumnDirective field='customerName' headerText='Customer'/>
    //     <ColumnDirective field='customerPincode' headerText='Customer PIN'/>
    //     <ColumnDirective field='customerPhone' headerText='Customer CONTACT'/>
    //     </ColumnsDirective>
    //     <Inject services={[Page, Filter, Group, Toolbar, Edit]}/>
    //   </GridComponent>
    // </div>
    <DataGetter/>
  );
}

export default App;



  // const data: DataManager = new DataManager({
  //   url: 'https://my-json-server.typicode.com/NikhilGarakapati/demo/repdata',
  //   crossDomain: true,
  //   adaptor: new ODataAdaptor()
  // });

  //const query = new Query().addParams('sort', 'representative region');