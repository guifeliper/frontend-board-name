# Board Component
![2020-12-06 18 20 26](https://user-images.githubusercontent.com/14844155/101389097-34c37380-38c1-11eb-9d9d-89689b07ea1f.gif)

## How to create a email input board component
The component need the info of four elements, the emailsContainer, the input field, the  button add email and the button get emails count. 

```
(function (container: HTMLElement, input: HTMLInputElement, buttonAdd: HTMLButtonElement, buttonGetEmail: HTMLButtonElement) {
  ...
  ...
})(document.getElementById("emailsContainer") as HTMLElement,
  document.getElementById("emailsInput") as HTMLInputElement,
  document.getElementById("addEmail") as HTMLButtonElement,
  document.getElementById("getEmails") as HTMLButtonElement); 
  ```
  
 ## Classes
 ### Email 
 ``` new Email(this.email, this.checkEmail())  ```
 The constructor of Email expects to receive an email as string and if the email is valid as boolean. 
 #### Atributes
 | name        | type           | 
| ------------- |:-------------:| 
| email      | string | 
| isValid      | Boolean | 
| validEmail      | string | 
| invalidEmail      | string | 



 #### Functions
 | Function        | Return           | Objective    |
| ------------- |:-------------:| -----:|
| getEmailHTML      | HTMLElement | Create the correct DOM HTML for the email provided. Returns the email valid or invalid DOM. |
| checkEmail      | Boolean | Verify if the string provided match with email regex. Returns true or false. |
| render     | HTMLElement      |  Render the email provided in the DOM with all functionalities. Returns the container |
 
 ### Utils
 | Function        | Return           | Objective    |
| ------------- |:-------------:| -----:|
| generateFakeEmail      | string | Returns a valid email format |
| getValidEmails      | number | Return the number of emails valid|
| insertEmails      | string | Render all emails passed by the string |




 ## Requirements
  + Node 12+
  
  The application runs on Typescript and webpack (for the build)
  
  
