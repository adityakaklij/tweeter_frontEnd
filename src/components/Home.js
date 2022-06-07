import React,{useEffect, useState} from 'react'
import { ethers } from 'ethers';
import "../home.css"
import { Abi , contractAddress } from './Abi'



export default function Home() {

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner()
  const contractInst = new ethers.Contract(contractAddress , Abi, provider.getSigner())


  const [createUser , setCreateUser] = useState("Register User")
  const [theTweets , setTheTweets] = useState();
  const [createTweet , setCreateTweet] = useState()
  const [userCountIs , serUserCount] = useState();
  const [theAddres, setTheAddress] = useState()


  useEffect(() => {
    totalRegisterUsers();
  })


  const createUserFun =  async ()=>{
    const userAddress = await signer.getAddress()
    const CheckTheUser = await contractInst.checkUser(userAddress)
    
      if (!CheckTheUser ){
        console.log(userName)
        const createUser = await contractInst.createUser(userName);
        await createUser.wait();
        totalRegisterUsers();
        setCreateUser("You are Registered")
      }
      else{
        window.alert("User Already exist")
        setCreateUser("You are Registered")
      }      
  } 
  // Taking input for the user Name.
  const [userName , setUserName] = useState()
  const takeInput = (e)=>{
    const usrName = e.target.value
    setUserName(usrName);
  }

  // Making tweet

  const takeTweetInput = (e)=>{
    const userTweet = e.target.value
    if (e.target.value.length == 280){
      window.alert("Tweet should less than 280 characters.")
    }

    setCreateTweet(userTweet);
  }
  const createTheTweet = async()=>{

    const userAddress = await signer.getAddress()
    const CheckTheUser = await contractInst.checkUser(userAddress)

    if(CheckTheUser){

      const makeTheTweet = await contractInst.createTweet(createTweet)
      await makeTheTweet.wait();
      window.alert("Tweet Successfully :)")
    }

    else{
      window.alert("Please Register to make Tweet");
    }
  }

  // Functions to delete the tweet
  const deleteTheTweet = async()=>{
    const userAddress = await signer.getAddress()
    const CheckTheUser = await contractInst.checkUser(userAddress)

    if(!CheckTheUser){
      window.alert("Please Register first!")
    }

    else{
      const deleTweet = await contractInst.deleteTweet();
      await deleTweet.wait();

      window.alert("Tweet deleted Successfully.")
    }
  }

  const totalRegisterUsers = async() =>{
    const totalUsersAre = await contractInst.UserCounter();
    serUserCount(totalUsersAre.toString())
  }
  
  // Display the Tweets
  const showTheTweets = async()=>{
      const userAddress = await signer.getAddress()
      const shTweet = await contractInst.reteriveTweet(theAddres);
      if(shTweet == ""){
        window.alert("No tweets from the user")
      }
      setTheTweets(shTweet);
  }

  const takeAddressInput = async (e)=>{
      if (e.target.value.length === 0){
        const userAddress = await signer.getAddress()
        setTheAddress(userAddress)
      }
      else{
        setTheAddress(e.target.value)
      }
  }

  return (
    <div>
        <section>

            <h1> DECENTRALIZE  YOUR  TWEETS!</h1>
            <br />

            <h4>Register User Count {userCountIs}</h4>
            <br />

            <h2>Create User</h2>
            <button className="btn-primary" onClick={createUserFun}> {createUser}</button>
            <br />
            <br />
            <input className='tweetInput1 my-2' type="text" placeholder='Enter user Name ' onChange={takeInput} />
        </section>


        <section>
          <br /> <br />
          <h3>Create New tweet</h3>
            <button className="btn-primary" onClick={createTheTweet}>Make Tweet</button>
            <button className="btn-primary mx-5" onClick={deleteTheTweet}>Delete Tweet</button>

            <br />
            <br />
            <input className='tweetInput1' type="text" placeholder='Enter your tweet' onChange={takeTweetInput}/>
        </section>

        <section>
          <br /> <br />

        </section>

        <section>
          <br /> <br />
          <h3>View Tweet</h3>
            <input className='tweetInput1' type="text" placeholder='Enter Address to get tweet' onChange={takeAddressInput}/>

            <button className="btn-primary mx-2" onClick={showTheTweets}>View Tweet</button>
            <br />
            <p>tweet will display below</p>
            <h4 >{theTweets}</h4>
            <br /><br /><br /><br />
        </section>

          
    </div>
  )
}
