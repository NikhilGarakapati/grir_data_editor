import * as React from 'react';
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import data from './db.json';
import DataService from './DataService.js';
import DataCheck from './DataCheck.js';
export const DialogFormTemplate: React.FC = (props: any) => {
    var d: any = DataCheck.states()
    const repNameDataOnly: any = DataUtil.distinct(data, 'name', true);
    // const repRegionDataOnly: any = DataUtil.distinct(d, 'statename', true);
    const repAreaDataOnly: any = DataUtil.distinct(data, 'representativeArea', true);
    const cusPincodeOnly: any = DataUtil.distinct(data, 'customerPincode', true);

    // console.log(repNameDataOnly)

    return (
        <div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <TextBoxComponent id="id" value={props.id}
                        placeholder="id" floatLabelType="Auto" />
                </div>
                <div className="form-group col-md-6">
                    <DropDownListComponent id="name" value={props.representativeName}
                        dataSource={repNameDataOnly} fields={{ text: 'name', value: 'name' }}
                        placeholder="name" floatLabelType="Auto" />
                </div>
                <div className="form-group col-md-6">
                    <DropDownListComponent id="representativeRegion" value={props.representativeRegion}
                        dataSource={d} fields={{ text: 'representativeRegion', value: 'representativeRegion' }}
                        placeholder="representativeRegion" floatLabelType="Auto" />
                </div>
                <div className="form-group col-md-6">
                    <DropDownListComponent id="representativeArea" value={props.representativeArea}
                        dataSource={repAreaDataOnly} fields={{ text: 'representativeArea', value: 'representativeArea' }}
                        placeholder="representativeArea" floatLabelType="Auto" />
                </div>
                <div className="form-group col-md-6">
                    <DropDownListComponent id="customerPincode" value={props.customerPincode}
                        dataSource={cusPincodeOnly} fields={{ text: 'customerPincode', value: 'customerPincode' }}
                        placeholder="customerPincode" floatLabelType="Auto" />
                </div>
            </div>
        </div>

    );
}
