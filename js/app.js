var resultList=document.getElementById('resultlist');
var tableEl= document.createElement('table');
var rowEL=document.createElement('tr');
var dataEL=document.createElement('tr');
var th1El=document.createElement('th');
th1El.textContent='item'
var th2El=document.createElement('th');
th2El.textContent="Quentity"
tableEl.appendChild('th1El')
rowEL.appendChild('th2El')
resultList.appendChild('table')


var arrayOfObjects=[];
function order (order, quentity){
    this.order=order;
    this.quentity=quentity;
    arrayOfObjects.push(this);
}
var submit=document.getElementById('submit');
submit.addEventListener( 'click' , function (event ){
    event.preventDefault
    var input1=document.getElementById('first').value ;
    var input2=document.getElementById('second') .value;
});
new order(input1,input2);
setdata();
function setdata(){
    var setdata=JSON.stringify(arrayOfObjects);
    localStorage.setItem('raghad', setdata);
}
function getdata(){
    var setdata = localStorage.getItem('raghd');
}
getdata();