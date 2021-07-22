//-------------------------------------------
//https://stackoverflow.com/questions/68492375/how-can-i-convert-a-blob-file-from-a-react-to-a-url
//-------------------------------------------

//This is an issue that occurred while trying to implement a profile image change using React.

//Function that receives image values cropped from canvas, converts to blob, and requests it to be saved to the server
const onClickUploadImage = (canvas, crop) => {
  if (!crop || !canvas) {
    return;
  }

  const canvasUrl = canvas.toDataURL("image/png");
  const base64Incoding = atob(canvasUrl.split(",")[1]);
  const array = [];
  for (let i = 0; i < base64Incoding.length; i++) {
    array.push(base64Incoding.charCodeAt(i));
  }
  const file = new Blob([new Uint8Array(array)], { type: "image/png" });
  const fd = new FormData();
  fd.append("file", file);

  //Verify that the blob is created as an url image
  console.log("convert file >> ", window.URL.createObjectURL(file));
  //conver file >> blob:http://localhost:3000/afdc0910-76bb-4e53-801c-61dc890c651f

  const config = {
    header: {
      processData: false,
      "content-type": false,
    },
  };

  axios
    .post("/api/users/update/image", fd, config)
    .then(({ data }) => {
      console.log("data >> ", data);
      //data >> { success:true, message:"File saved successfully" }

      alert("Profile upload successful.");
    })
    .catch((err) => {
      alert("Profile upload failed.");
    });
};

// On the server side, we use the filter module to store very well.
// Type is saved as file.

// The problem is that I want to read this file and display it as an image.

// To do that, I checked to see if the stored blob reads well.
// I tried to read the saved blob file using input and convert it as below code, but failed.

// input ex) <input type="file" onChange={onClickBlobToURL} />

function onClickBlobToURL(e) {
  const file = e.target.files[0];

  console.log("file > ", file);
  //File Attach Output Result Image

  const reader = new FileReader();

  if (file) {
    console.log("blobToURL > ", reader.readAsDataURL(file));
    //blobToURL > undifined
  }
}

// Did you save it the wrong way?
// Is it wrong to read blob?
