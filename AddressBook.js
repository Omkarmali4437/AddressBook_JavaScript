var regexname = new RegExp('[A-Z]{1}[a-z]{3,}');
var regexaddress = new RegExp('[A-Z]{1}[a-z]{4,}');
var regexpincode = RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
var regexphone = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
var emailregex = RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');

class AddressBook{
    firstname;
    lastname;
    address;
    city;
    state;
    zip;
    phone_number;
    email;

    constructor(...params){

        this.setfirstname = params[0];
        this.setlastname = params[1];
        this.setaddress = params[2];
        this.setcity = params[3];
        this.setstate = params[4];
        this.setzip = params[5];
        this.setphonenumber = params[6];
        this.setemail = params[7];   

    }

    get getfirstname(){ return this.firstname; }
    
    set setfirstname(firstname){ 
        if(regexname.test(firstname)){
            this.firstname = firstname;
        }
        else{
            throw "Name is Incorrect";
        }
    }

    get getlastname(){ return this.lastname; }

    set setlastname(lastname){
        if(regexname.test(lastname)){
            this.lastname = lastname;
        }
        else{
            throw "Name is Incorrect";
        }
    }

    get getaddress(){ return this.address; }

    set setaddress(address){
        if(regexaddress.test(address)){
            this.address = address;
        }else{
            throw "Address is Incorrect";
        }
    }

    get getcity(){ return this.city; }

    set setcity(city){ 
        if(regexaddress.test(city)){
            this.city = city;
        }else{
            throw "City is Incorrect";
        }
    }

    get getstate(){ return this.state; }

    set setstate(state){
        if(regexaddress.test(state)){
            this.state = state;
        }else{
            throw "State is Incorrect";
        }
    }

    get getzip(){ return this.zip; }

    set setzip(zip){
        if(regexpincode.test(zip)){
            this.zip = zip;
        }else{
            throw "Pincode is Incorrect";
        }
    }

    get getphonenumber(){ return this.phone_number; }

    set setphonenumber(phone_number){
        if(regexphone.test(phone_number)){
            this.phone_number = phone_number;
        }else{
            throw "Phone Number is Incorrect";
        }
    }

    get getemail(){ return this.email; }

    set setemail(email){
        if(emailregex.test(email)){
            this.email = email;
        }else{
            throw "Email is Incorrect";
        }
    }

    toString(){
        return "FirstName= " +this.firstname+ " LastName= " +this.lastname+ " Address= " +this.address+ " City= " 
        +this.city+ " State= " +this.state+ " Zip= " +this.zip+ " PhoneNumber= " +this.phone_number+ " Email= " +this.email+"\n";
    }
}

let addressBook = [] ;
try{

    let contact1 = new AddressBook("Mark","Robinson","Malibu","Venice","California",100019,9019291971,"mark@gmail.com");
    let contact2 = new AddressBook("Robert","Downey","Broklyn","Manhattan","Newyork",300013,8918192191,"robert@gmail.com");
    let contact3 = new AddressBook("Chris","Davidson","Saltlake","Saltlakecity","Texas",400018,8891823349,"chris@gmail.com");
    let contact4 = new AddressBook("Keem","Star","Capital","Phoenix","California",866019,7827826798,"keem@gmail.com");
    let contact5 = new AddressBook("Mathew","Seagule","Panther","Manhattan","Texas",400712,7672789892,"mathew@gmail.com");

    addressBook.push(contact1); 
    addressBook.push(contact2);
    addressBook.push(contact3);
    addressBook.push(contact4);

    let arr= addressBook.map( ele => ele.getfirstname === contact5.getfirstname );

    if( arr.includes(true) ){
        console.log("Contact already exits please enter new contact");
    }else{ addressBook.push(contact5); }
    
    console.log(addressBook);
    
    let countArr = addressBook.map(ele => typeof ele.getfirstname === 'string');
    let sum = countArr.reduce((prev, curr)=> prev + curr); 
    console.log("Size of array before deltion: "+sum);
    console.log("+++++++++++++++"); 

    if( addressBook.find( name => name.firstname == 'Robert' ) ){
        let id = addressBook.findIndex( name => name.firstname == 'Robert' );
        addressBook[id].setfirstname="Robin";
    }else{ console.log("false"); }

    if( addressBook.find( name => name.firstname == 'Keem' ) ){
        console.log(addressBook.findIndex(name => name.firstname == 'Keem'));
        addressBook.splice(3,1);
        console.log("+++++++++++++++");
    }
    
}catch(e){
    console.error(e);
}

console.log(addressBook);

let countArr = addressBook.map(ele => typeof ele.getfirstname === 'string');
let sum = countArr.reduce((prev, curr)=> prev + curr); 
console.log("Size of array after deltion: "+sum);

console.log("+++++++++++++");
console.log("Contacts is Manhattan city is: \n"+addressBook.filter(element => element.city == 'Manhattan'));

console.log("+++++++++++++");
console.log("Contacts is California state is: \n"+addressBook.filter(element => element.state == 'California'));

console.log("+++++++++++++");
let citycount = addressBook.map(ele => ele.city === 'Manhattan' );
let sumofContactByCity = citycount.reduce((prev, curr)=> prev + curr); 
console.log("Count of contact by city are: "+sumofContactByCity);

console.log("+++++++++++++");
let statecount = addressBook.map(ele => ele.state === 'California' );
let sumofContactByState = statecount.reduce((prev, curr)=> prev + curr); 
console.log("Count of contact by state are: "+sumofContactByState);

console.log("+++++++++++++");
console.log("After Sorting");
console.log(addressBook.sort());