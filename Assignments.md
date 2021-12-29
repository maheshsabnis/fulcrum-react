# Day 1: 27-12-2021

1. Create a Calculator like Windows Calculator. (Today)
2. Generate a Radiobutton List of Departments based on Departments array (Today)
    - const [departments, setDept] = useState(['IT', 'SL', 'HR', 'TR', 'TP', 'AC']);
    - When a Rediobutton is selected show the selected department in div tag
    - Plan of Implementation
        - Generate a Radiobutton List, We need a Radio Button, list means that there will be multiple Radio Buttons - of Departments based on Departments array, a JavaScript Array with Names of Departments
            - The Departments array must be a State property
                -  const [departments, setDept] = useState(['IT', 'SL', 'HR', 'TR', 'TP', 'AC']);
        - Generate Radio Button List based on array means the radio button MUST be generated inside the map() method of array, means perform Array Iteration         


3. Generate a CheckBoxList based on Course Array. The COurses Array is as below (MUST-BE-DONE-BY-TOMORROW)
    - [
        {CourseName: 'JS', Fees:1222},
        {CourseName: 'C#', Fees:2222},
        {CourseName: 'ASP.NETR', Fees:3222},
        {CourseName: 'SQL SERVER', Fees:4222},
        {CourseName: 'MVC', Fees:5222},
        {CourseName: 'React', Fees:6222},
        {CourseName: 'Angular', Fees:7222}
    ]     
    - The end-use can select/ de-select courses, show the sum of the selected courses by end-user in div tag


# Day 2: 28-12-2021
1. Create a Re-Usable Table component based on the following requirements
    - It must accepts a DataSource property of the type collection to generate Columns and Rows
    - If the Table Row is clicked then the selected row values must be shown in the TextBoxes and Select Element 
    - Planning
        - dataSource: products
            - Generating TAble Rows
        - rowClick Event: setProduct()
            - For Click Event on Rows


2. Modify the DataGridComponent for the following (Today)
    - Pass the 'canDelete' property to the DataGridComponent. If the value of 'canDelete' is true, then each table row must show the DELETE button to delete the record. When this button is clicked, then the selected row Must be passed to the parent component and the record from the array of the parent component must be deleted. 
    - Implement the logic of sorting the data from the DataGrid when a column header is clicked     

    - Parent Component is using the DataGridComponent for Showing Data
        - dataSource: products
            - Generating TAble Rows
        - rowClick Event: setProduct()
        - canDelete: true /  false
            - each table row must show the DELETE button to delete the record.
            - Modify the dataSource.map() which is generating td and tr
                - One of the td will have delete button
    - When this button is clicked,
        - Subscribe the click binding, onClick
    - then the selected row Must be passed to the parent component 
        - Emit the selected row back to the parent Component
        - The parent Component MUST pass the callback action to child using the context  
        - The child component will use this callback action and bind with the onClick event of the button   
    - and the record from the array of the parent component must be deleted.             



3. Modify the ProductHttpCallComponent with the Following (Today)
    - Display the Selected Product from the Table Row in Products TextBoxes
    - When an end-user modify these values of the product and click on the save button, the product must be updated     
4. Add a Search TextBox above the table and before the textbox add a dropdown i.e. select element. This select element will have options as ProductName, Manufacturer, CategoryName and Description. When the specific option is selected from the select element and for the option the search value is entered in TextBox, the table will show products based on Search Value entered in the TextBox
    - e.g. If selected option is CategoryName and in TextBox 'elect' is entered, then the table will show all products have CategoryName starting from 'Elect' OR 'elect'        
