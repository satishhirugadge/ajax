console.log('Ajax tutorial in one video');

let fetchbtn=document.getElementById('FetchBtn');
fetchbtn.addEventListener('click',function()
{
    //console.log('satish'); // we come to know that the button is licked perfectly.
  
    //3 steps are reminder [IORS] for get request.
    //1......instantiate an xhr object.
    const Http = new XMLHttpRequest(); //created an object.

    //2........open the object/from where the data is coming and wether it is a blocking data or not.
    Http.open("GET",'https://jsonplaceholder.typicode.com/posts',true);


    //3..............What to do when the response is ready.
    Http.onload=function(){
        //we can even check the status of the onload.
        if(this.status===200) //as 200 means its successful.
        {
        console.log(this.responseText);
    }
else{
    console.error('Some error occured')
}}
     //4...........send the request.
    Http.send();
    console.log('satish');
})


//stept for post request.
//we copied the link from the fake data and then change the get to POST.
//further we also need to put the data to send it.

Http.open("POST", 'http://dummy.restapiexample.com/api/v1/create', true);


//3..............What to do when the response is ready.
Http.onload = function () {
    //we can even check the status of the onload.
    if (this.status === 200) //as 200 means its successful.
    {
        console.log(this.responseText);
    }
    else {
        console.error('Some error occured')
    }
}
//4...........send the request.
Http.send();
console.log('satish');















