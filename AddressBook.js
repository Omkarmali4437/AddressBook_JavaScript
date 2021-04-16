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

        this.firstname = params[0];
        this.lastname = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone_number = params[6];
        this.email = params[7];   

    }

    get getfirstname(){ return this._firstname; }
    
    set firstname(firstname){ 
        if(regexname.test(firstname)){
            this._firstname = firstname;
        }
        else{
            throw "Name is Incorrect";
        }
    }

    get getlastname(){ return this._lastname; }

    set lastname(lastname){
        if(regexname.test(lastname)){
            this._lastname = lastname;
        }
        else{
            throw "Name is Incorrect";
        }
    }

    get getaddress(){ return this._address; }

    set address(address){
        if(regexaddress.test(address)){
            this._address = address;
        }else{
            throw "Address is Incorrect";
        }
    }

    get getcity(){ return this._city; }

    set city(city){ 
        if(regexaddress.test(city)){
            this._city = city;
        }else{
            throw "City is Incorrect";
        }
    }

    get getstate(){ return this._state; }

    set state(state){
        if(regexaddress.test(state)){
            this._state = state;
        }else{
            throw "State is Incorrect";
        }
    }

    get getzip(){ return this._zip; }

    set setzip(zip){
        if(regexpincode.test(zip)){
            this._zip = zip;
        }else{
            throw "Pincode is Incorrect";
        }
    }

    get getphonenumber(){ return this._phone_number; }

    set phone_number(phone_number){
        if(regexphone.test(phone_number)){
            this._phone_number = phone_number;
        }else{
            throw "Phone Number is Incorrect";
        }
    }

    get getemail(){ return this._email; }

    set email(email){
        if(emailregex.test(email)){
            this._email = email;
        }else{
            throw "Email is Incorrect";
        }
    }

    toString(){
        return "FirstName= " +this.firstname+ " LastName= " +this.lastname+ " Address= " +this.address+ " City= " 
        +this.city+ " State= " +this.state+ " Zip= " +this.zip+ " PhoneNumber= " +this.phone_number+ " Email= " +this.email+"\n";
    }
}

//Main
let addressBook = [] ;
function craeateContact(){
    try{

        let contact1 = new AddressBook("Mark","Robinson","Malibu","Venice","California",100019,9019291971,"mark@gmail.com");
        let contact2 = new AddressBook("Robert","Downey","Broklyn","Manhattan","Newyork",300013,8918192191,"robert@gmail.com");
        let contact3 = new AddressBook("Chris","Davidson","Saltlake","Saltlakecity","Texas",400018,8891823349,"chris@gmail.com");
        let contact4 = new AddressBook("Keem","Star","Capital","Phoenix","California",866019,7827826798,"keem@gmail.com");
    
        addressBook.push(contact1); 
        addressBook.push(contact2);
        addressBook.push(contact3);
        addressBook.push(contact4);

        console.log(addressBook);
    }catch(e){
        console.error(e);   
    }
}

function insertnewContact(){
    try{
        let contact5 = new AddressBook("Maxa","Seagule","Panther","Manhattan","Texas",400712,7672789892,"mathew@gmail.com");

        let arr= addressBook.map( ele => ele.getfirstname === contact5.firstname );
        
        if( arr.includes(true) ){
            console.log("Contact already exits please enter new contact");
        }else{ addressBook.push(contact5); }

        console.log(addressBook);
    
    }catch(e){
        console.error(e);
    }
}

function editContact(){
    if( addressBook.find( name => name.firstname == "Robert" ) ){
        let id = addressBook.findIndex( name => name.firstname == "Robert" );
        console.log(id);
        addressBook[id].firstname="Robin";
    }else{ console.log("false"); }

}

function deleteContact(){
    if( addressBook.find( name => name.firstname == 'Keem' ) ){
        console.log(addressBook.findIndex(name => name.firstname == 'Keem'));
        addressBook.splice(3,1);
        console.log("+++++++++++++++");
    }
    console.log(addressBook);
}

function count(){
    let countArr = addressBook.map(ele => typeof ele.firstname == 'string');
    let sum = countArr.reduce((prev, curr)=> prev + curr); 
    console.log("+++++++++++++++");
    return sum; 

}

function viewContactbyCity(){
    console.log("+++++++++++++");
    console.log("Contacts is Manhattan city is: \n"+addressBook.filter(element => element.city == 'Manhattan'));
    
}

function viewContactbystate(){
    console.log("+++++++++++++");
    console.log("Contacts is California state is: \n"+addressBook.filter(element => element.state == 'California'));
}

function countbyCity(){
    console.log("+++++++++++++");
    let citycount = addressBook.map(ele => ele.city === 'Manhattan' );
    let sumofContactByCity = citycount.reduce((prev, curr)=> prev + curr); 
    console.log("Count of contact by city are: "+sumofContactByCity);
}

function countbyState(){
    console.log("+++++++++++++");
    let statecount = addressBook.map(ele => ele.state === 'California' );
    let sumofContactByState = statecount.reduce((prev, curr)=> prev + curr); 
    console.log("Count of contact by state are: "+sumofContactByState);
}

function sorting(){
    console.log("+++++++++++++");
    console.log("After Sorting");
    console.log(addressBook.sort());
}

function mainfunction(){
    craeateContact();
    insertnewContact();
    editContact();
    console.log("Size before  deletion: "+count());
    deleteContact();
    console.log("Size after  deletion: "+count());
    viewContactbyCity();
    viewContactbystate();
    countbyCity();
    countbyState();
    sorting();
}

mainfunction();