document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
      console.log("complete");
      initApp();
    }
  });
  
  const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => { 

        event.preventDefault(); //In js , sometimes the data we entered in the form will not be stored and the page will keep on reloading when submitted.This issue will arise often by default in js which will create issue. So, this line of code will help in preventing from such problem!

        console.log("Event submitted");
    });
};