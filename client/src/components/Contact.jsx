import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact =()=> {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const collectData = async (e) => {

		e.preventDefault();
		console.log(name, email, phone, message);
		let result = await axios.post(process.env.REACT_APP_API, {name,email,phone,message});


		if(result.data.success ===  true){
		toast.success(`Dear ${result.data.message}`);
	}else if(result.data.success === false){
			toast.success(`${result.data.message}`);
		}else{
		toast.success("Try again")
		}
	}

  return (
    <div class="contact1" id='contact' data-aos="fade-up">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt" data-tilt>
            <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_7wwm6az7.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
			</div>

			<form onSubmit={collectData} class="contact1-form validate-form" >
				<span class="contact1-form-title">
					Get in touch.
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input value={name} onChange={(e)=>setName(e.target.value)} class="input1" type="text" name="name"  placeholder="Name" required/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input value={email} onChange={(e)=>setEmail(e.target.value)} class="input1" type="text" name="email"  placeholder="Email" required/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input value={phone} onChange={(e)=>setPhone(e.target.value)} class="input1" type="number" name="phone"  placeholder="Phone no." required/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea value={message} onChange={(e)=>setMessage(e.target.value)} class="input1" name="message"  placeholder="Message" required></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<button type='submit'  class="contact1-form-btn">
						<span>
							Send Email
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					<ToastContainer />
					</button>

				</div>
			</form>
		</div>
	</div>
  )
}

export default Contact