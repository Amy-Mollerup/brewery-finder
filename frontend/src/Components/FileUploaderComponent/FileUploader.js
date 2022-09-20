/* File upload ref from the 
https://www.geeksforgeeks.org/file-uploading-in-react-js/
*/
import axios from "axios";
import React, { Component } from "react";
import "./FIleUploader.css"
import { Label, Input } from "reactstrap";

export default function FileUploader(props) {

    return (
      <div className="uploadPic--section">
        <Label for="image"><h6>Link an image for your entry</h6></Label>
        <Input
          id="image-link"
          type="text"
          name="image"
          placeholder="http://"
          autoComplete="off"
          className="UploadPicForm-control-plaintext"
          value={props.image}
          onChange={props.handleChange}
        />
      </div>
    );
}

// /* File upload ref from the 
// https://www.geeksforgeeks.org/file-uploading-in-react-js/
// */
// import axios from "axios";
// import React, { Component } from "react";
// import "./FIleUploader.css"

// class FileUploader extends Component {
//   state = {
//     // Initially, no file is selected
//     selectedFile: null,
//   };

//   // On file select (from the pop up)
//   onFileChange = (event) => {
//     // Update the state
//     this.setState({ selectedFile: event.target.files[0] });
//   };

//   // On file upload (click the upload button)
//   onFileUpload = () => {
//     // Create an object of formData
//     const formData = new FormData();

//     // Update the formData object
//     formData.append(
//       "myFile",
//       this.state.selectedFile,
//       this.state.selectedFile.name
//     );

//     // Details of the uploaded file
//     console.log(this.state.selectedFile);

//     // Request made to the backend api
//     // Send formData object
//     axios.post("api/uploadfile", formData);
//   };

//   // File content to be displayed after
//   // file upload is complete
//   fileData = () => {
//     if (this.state.selectedFile) {
//       return (
//         <div className="uploadDetail--section">
//           <h2>File Details:</h2>

//           <p>File Name: {this.state.selectedFile.name}</p>

//           <p>File Type: {this.state.selectedFile.type}</p>

//           <p>
//             Last Modified:{" "}
//             {this.state.selectedFile.lastModifiedDate.toDateString()}
//           </p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <br />
//           <h6>Choose before Pressing the Upload button</h6>
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//       <div className="uploadPic--section">
//         <h5>Upload a Picture!</h5>
//         <div>
//           <input type="file" onChange={this.onFileChange} />
//           <button onClick={this.onFileUpload}>Upload!</button>
//         </div>
//         {this.fileData()}
//       </div>
//     );
//   }
// }

// export default FileUploader;
