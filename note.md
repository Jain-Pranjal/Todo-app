<!-- app.jsx se main page hai as / route hai humara jo ke home page hai apna  -->
now for adding simple page routing we need the react router dom package 
we need the 2 pages only login and register 


so for using the react router we need to use the {BrowserRouter,Routes,Route} component from the react-router-dom package
then make a folder name as **pages** and inside that make the RFC



<!-- to hum log next me jab file route banate the tab bhi bahapar apna react ka comp he to bhejte the jab bhi koi us route par aata hai to 
similary koi bhi insaan agar es route par ayega then usko yeah vala element milega jo ke humne apne pages me dal rkha hai   -->


so in the appwrite humko SDK se connect karna padega taki hum appwrite ke service use kar sake

now after that make the appwrite folder and put all the config there


<!-- to access the database we need to use the database api of it  -->

aab jab bhib me notes ke routes par jaunga to vaha apr mera database la connection banega and then me vaha se crud operation kar paunga 

we need to make the syntax a good one like db.notes.create() and db.notes.update() and db.notes.delete() and db.notes.get()

# remember one thing that name attribute should be same as the field name int he database 

setnotes he fucntion hai jo humko notes set karega from the frontend as we as from the backend

agar humare pheles e 3 the and then get kara to sertnotes 0 se 3 ho gya lekin backend me humne write bhi karavya hai so humko setnotes ko bhi udpate karna hoga as humara purane me to 3 he thai lekin abh to humare pass 4 ho gye hai so humko usko update karna paedga 
 ## setNotes((prev)=>[response,...prev]);
resposne me humara new todo add hua hai 

appwrite me hum apna backend ka code direclty upar ke taraf likha hai abhi to 


data ko pass karte time humko tell bhi karna padega ke data konse attribuyte me pass kar rhe hai to humko columne bhi batana hoga 
db.notes.create({"body":"noteBody"})


sorting karne ke lie we will be using the Query object of the appwrite sdk

now meko data ko update and delete karna hai to vo hum id ke help se kar skte hai 













