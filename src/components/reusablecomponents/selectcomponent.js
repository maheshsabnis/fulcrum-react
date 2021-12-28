const SelectComponent=(props)=>{

    // props.stateProperty: the 'state' property name from the Parent-Component
    // props.dataSource: the collection received from the parent-component
    // props.selectedValue(): This is the method that will be used by the Parent-Component to receive an emitted data from child 

    // define a local-method that will listen to a 'onChange' event

    const handleChange=(evt)=>{
        console.log(`The Selected Value = ${evt.target.value}`);

        props.selectedValue(evt.target.value);
    };

    if(props.dataSource === undefined || props.dataSource.length === 0) {
        return (
            <div className="container">
                <strong>No Data to Display</strong>
            </div>
        );
    } else {
       return( <select className="form-control"
          value={props.stateProperty}
          onChange={handleChange}>
            {
                props.dataSource.map((record,index)=>(
                    <option key={index} value={record}>
                        {record}
                    </option>
                ))
            }
        </select>);
    }



};

export default SelectComponent;