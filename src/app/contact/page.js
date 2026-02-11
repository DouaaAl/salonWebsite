import React from 'react'
import styles from "./map.module.css"
import ServiceT from '../components/servicethree/service'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="600"
        height="450"
        style={{ width: 100 + `vw` }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
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
      <ServiceT />
      </>

  )
}

export default page