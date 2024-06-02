import { useRef, useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { getDatabase, ref, set } from "firebase/database";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAY2ufruE7Wn0vKcnnRT0mYa7KHn9zzfTc",
  authDomain: "portfolio-4e184.firebaseapp.com",
  projectId: "portfolio-4e184",
  storageBucket: "portfolio-4e184.appspot.com",
  messagingSenderId: "489849133008",
  appId: "1:489849133008:web:2e80a28b91504d5c140bd5",
  measurementId: "G-9FWYCQSFVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const inputRef=useRef(null);
  const numberRef=useRef(null);
  const emailref=useRef(null);

  const [data,setData]=useState({
    names:'',
    number:'',
    email:''
  });
  
 
  const PostData=async(e)=>{
    e.preventDefault();
    const{names,number,email}=data;
    const res =await fetch("https://portfolioxt-default-rtdb.firebaseio.com/portfolio.json",
    {
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        names,
        number,
        email
      })
    })
    console.log("done")
    toast.success('Welcome Friend!', {
      // position: "top-right",
      // autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
      theme: "dark",
      
      });
    
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="hero-section bebas-neue-regular">
          <h1>
            Hi there my name is <span className="">Muhammad Muneer Zameer</span>{" "}
            I am a Designer / Developer
            <button>Connect With me</button>
          </h1>
          <div className="Profile-Image">
            <img src="../pfp2.png" alt="" />
          </div>
        </div>
        {/* intro */}
        <div className="Introduction">
          <h1>Intro</h1>
          <p>
            I'm a designer with a passion for crafting clean, modern
            experiences. With over 4 years of freelance experience, I help
            brands and software houses translate ideas into impactful visuals. I
            bring a minimalist approach to every project, ensuring clarity and
            functionality resonate with your audience.
          </p>
        </div>
        <div className="Tech" id="tech">
          <h1>Design Stack</h1>
          <div className="DesignStack">
            <div>
              <img
                src="../Illustrator.svg"
                width={50}
                height={50}
                alt=""
                srcset=""
              />
              <h1>Adobe Illustrator</h1>
            </div>
            <div>
              <img
                src="../Photoshop.svg"
                width={50}
                height={50}
                alt=""
                srcset=""
              />
              <h1>Adobe Photoshop</h1>
            </div>
            <div>
              <img src="../Canva.svg" width={50} height={50} alt="" srcset="" />
              <h1>Canva</h1>
            </div>
            <div>
              <img
                src="../Natron.png"
                width={50}
                height={50}
                alt=""
                srcset=""
              />
              <h1>Natron</h1>
            </div>
            <div>
              <img src="../Figma.svg" width={50} height={50} alt="" srcset="" />
              <h1>Figma</h1>
            </div>
          </div>
          <h1>Frontend Stack</h1>
          <div className="frontStack">
            <div>
              <img src="../react.svg" width={50} height={50} alt="" srcset="" />
              <h1>React</h1>
            </div>
            <div>
              <img src="../HTML.svg" width={50} height={50} alt="" srcset="" />
              <h1>Html</h1>
            </div>
            <div>
              <img src="../CSS.svg" width={50} height={50} alt="" srcset="" />
              <h1>CSS</h1>
            </div>
            <div>
              <img
                src="../javascript.svg"
                width={50}
                height={50}
                alt=""
                srcset=""
              />
              <h1>Javascript</h1>
            </div>
            <div>
              <img src="../java.svg" width={50} height={50} alt="" srcset="" />
              <h1>Java</h1>
            </div>
            <div>
              <img
                src="../nextjs.svg"
                width={50}
                height={50}
                alt=""
                srcset=""
              />
              <h1>Next</h1>
            </div>
            <div>
              <img src="../C.svg" width={50} height={50} alt="" srcset="" />
              <h1>C++</h1>
            </div>
            <div>
              <img
                src="../reactNative.svg"
                width={50}
                height={50}
                alt=""
                srcset=""
              />
              <h1>React Native</h1>
            </div>
            <div>
              <img
                src="../tailwind.svg"
                width={50}
                height={50}
                alt=""
                srcset=""
              />
              <h1>Tailwind css</h1>
            </div>
          </div>
          <h1>Backend Stack</h1>
          
          <div className="backStack">
            <div>
              <img
                src="../nodejs.svg"
                width={50}
                height={50}
                alt=""
                srcset=""
              />
              <h1>Node</h1>
            </div>
            <div className="express">
              <img
                src="../express.png"
                width={50}
                height={50}
                alt=""
                srcset=""
              />
              <h1>Express</h1>
            </div>
          </div>
          <h1>Database</h1>
          <div className="database">
            <div>
              <img
                src="../firebase.svg"
                alt=""
                width={50}
                height={50}
                srcset=""
              />
              <h1>Firebase</h1>
            </div>
            <div>
              <img src="../mongo.svg" alt="" width={50} height={50} />
              <h1>MongoDb</h1>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <section className="footer" id="Contactme">
          <div>
            <h1>Contact me</h1>
            <div className="sociallLinks">
              <a href="https://wa.me/+92334565425" target="blank">
                <div>
                  <img
                    src="../whatsapp.svg"
                    width={30}
                    height={30}
                    alt=""
                    srcset=""
                  />
                  <span>Whatsapp</span>
                </div>
              </a>

              <a href="https://www.facebook.com/muneer.zameer.5" target="blank">
                <div>
                  <img
                    src="../facebook.svg"
                    width={30}
                    height={30}
                    alt=""
                    srcset=""
                  />
                  <span>Facebook</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-muneer-zameer-a9254a29a/"
                target="blank"
              >
                <div>
                  <img
                    src="../linkedin.svg"
                    width={30}
                    height={30}
                    alt=""
                    srcset=""
                  />
                  <span>Linkedin</span>
                </div>
              </a>
            </div>
          </div>

          <div className="Form">
           
            <input type="text" onChange={(e)=>{setData({...data,names:e.target.value})}} placeholder="Enter Name" />
            <input type="number" onChange={(e)=>{setData({...data,number:e.target.value})}} placeholder=" Enter Phone Number" />
            <input type="email" onChange={(e)=>{setData({...data,email:e.target.value})}} placeholder="Enter Email" />
            <input type="submit" onClick={PostData} className="Submit" />
            
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
