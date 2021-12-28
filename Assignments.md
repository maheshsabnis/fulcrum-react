# Day 1: 27-12-2021

1. Create a Calculator like Windows Calculator. (Today)
2. Generate a Radiobutton List of Departments based on Departments array (Today)
    - const [departments, setDept] = useState(['IT', 'SL', 'HR', 'TR', 'TP', 'AC']);
    - When a Rediobutton is selected show the selected department in div tag
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
2. Modify the DataGridComponent for the following (Today)
    - Pass the 'canDelete' property to the DataGridComponent. If the value of 'canDelete' is true, then each table row must show the DELETE button to delete the record. When this button is clicked, then the selected row Must be passed to the parent component and the record from the array of the parent component must be deleted. 
    - Implement the logic of sorting the data from the DataGrid when a column header is clicked      
3. Modify the ProductHttpCallComponent with the Following (Today)
    - Display the Selected Product from the Table Row in Products TextBoxes
    - When an end-user modify these values of the product and click on the save button, the product must be updated     
4. Add a Search TextBox above the table and before the textbox add a dropdown i.e. select element. This select element will have options as ProductName, Manufacturer, CategoryName and Description. When the specific option is selected from the select element and for the option the search value is entered in TextBox, the table will show products based on Search Value entered in the TextBox
    - e.g. If selected option is CategoryName and in TextBox 'elect' is entered, then the table will show all products have CategoryName starting from 'Elect' OR 'elect'        
