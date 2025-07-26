import React,{useState} from 'react'
import vg from "../assets/vg.png"
import toast from "react-hot-toast"
import {motion} from "framer-motion"
import {addDoc,collection} from "firebase/firestore"
import {db} from "../firebase"
// import { async } from '@firebase/util'

const Contact = () => {
    const [name,setName] =useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [disableBtn,setDisableBtn]=useState(false)
    // const changeHandler =()=>{


    // }
    const submitHandler=async(e)=>{
        e.preventDefault();
        setDisableBtn(true);
        // console.log(name,email,message)
        
       try{
        await addDoc(collection(db,"contacts"),{
            name,email,message
        })
        setName("")
        setEmail("")
        setMessage("")
        toast.success("Message Sent");
        setDisableBtn(false)
       }
       catch(error){
        toast.error("erroe")
        setDisableBtn(false)
       }
        //add doc(collection(firestore,nameof collection ,data))


    
    }



    const animations = {
        form:{
            initial:{
                x:"-100%",opacity :0
            },
            whileInView:{
                x:0,opacity :1
            }
        },
        button:{
            initial:{
                y:"-100%",opacity :0
            },
            whileInView:{
                y:0,opacity :1
            },
            transition:{
                delay:0.5
            }
        },
        
    }
  return (
    <div id="contact" aria-label="Contact section">
        <section >
            <motion.form onSubmit={submitHandler} {...animations.form}>
                <h2>
                    Contact me
                </h2>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value )} placeholder='Your name' required/>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value )} placeholder='Your email' required/>
                <input type="text"value={message} onChange={(e)=> setMessage(e.target.value )} placeholder='Your Message' required/>

                <motion.button className={disableBtn?"disableBtn":""} disabled={disableBtn} {...animations.button} type='submit'>send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt="Contact section graphic illustration"/>
        </aside>
    </div>
  )
}

export default Contact
//1033