import React from 'react'
import Image from 'next/image'
import styles from "./contact.module.css"
import Home from '../components/hometwo/home'
import ServiceT from '../components/servicetwo/service'

const page = () => {
  return (
    <>
    <main className={styles.main}>
        <div>
            <article>
                <Image 
                height={600}
                width={385}
                src="/contact.jpg"
               alt='contact'
               ></Image>
                <div>
                    <h3>Beauty Salon</h3>
                    <h1>Book Appointment</h1>
                    <p>
                        Mi senectus ac ullamcorper sollicitudin volutpat sit a velit. Purus scelerisque
                    </p>
                    <form action="">
                        <div>
                            <label>
                                 First Name
                                 <input placeholder='First Name' type="text" />       
                            </label>  
                            <label>
                                 Last Name
                                 <input placeholder='Last Name' type="text" />       
                            </label>    
                        </div>
                        <div>
                            <label>
                                 Email
                                 <input placeholder='Email' type="text" />       
                            </label>  
                            <label>
                                 Phone
                                 <input placeholder='Phone' type="text" />       
                            </label>                            
                        </div>
                        <div>
                            <label>
                                 Date
                                 <input type="date" />       
                            </label>  
                            <label>
                                 Time
                                 <input type="time" />       
                            </label>    
                            </div>                    <label>
                                Service
                                <select>
                                    <option>
                                        Services
                                    </option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </label>
                            <button>Send Message</button>
                    </form>
                </div>
            </article>
        </div>
        <span></span>
    </main>
    <br />
    <br />
     <br />
    <br /> <br />
    <br /> <br />
    <br /> <br />
    <br /> <br />
    <br /> <br />
    <br /> <br />
    <br /> 
    <Home />

    <ServiceT />
          <br /> <br />
    <br /> <br />
    <br /> <br />
    </>
  )
}

export default page