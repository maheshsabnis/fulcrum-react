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
