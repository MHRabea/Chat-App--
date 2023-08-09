import React,{useState , useContext} from "react"; 
import {AuthContext} from "../context/AuthContext";
import { collection, query, where , getDocs , doc , setDoc } from "firebase/firestore";
import {db} from "../firebase";




const Search = () => {
    const [userName , setUserName] = useState("");
    const [user , setUser] = useState(null);
    const[err,setErr] = useState(false);
    const {currentUser} = useContext(AuthContext)


    const handleSearch =async()=>{
        const q = query(collection(db,"users"),where("displayName", "==" , userName));
try{
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data())
})} catch(err){
    setErr(true);
}
    };


    const handleKey=(event)=>{
        event.code === "Enter" && handleSearch()
    }

    const handleSelect = async ()=>{
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid ; 
        try{
        const res = await getDocs(db,'chats', combinedId)

        if(!res.exists()){
            await setDoc(doc,(db,"chats", combinedId),{messeges:[]})
        }
        }catch(err){
            setErr(true)
        }
    }

   
    return (
       <div className="search">
       <div className="searchForm">
        <input type="text"  placeholder="Search" onKeyDown={handleKey} onChange={event=>setUserName(event.target.value)}/>
       </div>
       {err && <span>User Not Found</span>}
       {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userInfo">
        <span>{user.displayName}</span>
       </div>
       </div>}
       
       </div>
    )
} 



export default Search; 

