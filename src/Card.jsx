// const card=(props)=>{
//     const greeting='to card'
//     console.log('Props',props)
//     return(
//         <>
//         <h3>{props.name} I am Uma {greeting}</h3>
//         </>
//     )
// }
// export default card


// import { useState,useEffect } from "react"
// import axios from 'axios'
// import Card from 'react-bootstrap/Card';

// const Cards = (props)=>{
//     console.log('1')
//     const [name,setName]=useState([])

//     const updateName=(value)=>{
//         if(value=='js'){
//             setName('Javascript')
//         }
//     }

//     useEffect(()=>{
//         const apidata=getAPIData()
//     },[])

//     const getAPIData=async()=>{
//         const apidata = await axios.get('https://jsonplaceholder.typicode.com/posts')
//         console.log('apidata',apidata.data)
//         setName(apidata.data)
//     }

//     console.log('2')
//     return(

//     )
// }



// import { useState } from "react";
// const Card=(Props)=>
// {
//     //const greeting='welcome to anjac';
//     const [name,setName]=useState('Rajapalayam')
//     const updateName=(value)=>{setName(value)}
//     return(
//         <>
//         <div style={{textAlign:'center'}}>        
//         <h2>I am uma from  {name} {Props.name} </h2><br></br><br></br>
//         <button style={{backgroundColor:'pink'}} onClick={()=> setName('madurai')}>Set Name
//         </button><br></br><br></br>
//         <button style={{backgroundColor:'pink'}} onClick={()=> updateName('chennai')}>Name Update
//         </button>
//         </div>
//         </>
//     )
// }
// export default Card;


import axios from "axios"
import { useState } from "react"

const Card=(props)=>{
    const [name, setName]=useState([])
    const GetData=async () =>{
        const data=await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('data',data.data)
        setName(data.data)
    }
    return(
        <>
        <button onClick={()=>GetData()}>Get Data</button>
        {/* {<p>{JSON.stringify(name)}</p>} */}
        {
            name.map((value)=>{
                return <p>{value.title}</p>
            })
        }
        <input type ="text" onChange={(e)=>console.log(e.target.value)}/>
        </>
    )
}
export default Card