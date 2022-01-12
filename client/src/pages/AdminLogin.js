import Footer from "../components/HomeComponents/Footer";

export default function AdminRegister() {
  return (
    <></>
    // <p>admin register </p>
  );
}

// import react, { useState } from 'react';
// import {useNavigate} from "react-router-dom";
// export default function Form() {

// 	const navigate = useNavigate();
// // States for registration

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the email change
// const handleEmail = (e) => {
// 	setEmail(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the form submission
//  const handleSubmit =async function(e){
// 	e.preventDefault();
// 	if (email === '' || password === '') {
// 	setError(true);
// 	} else {

// 	setSubmitted(true);
//     const item ={email,password};
//   const result=await fetch("http://localhost:3000/admin_login",{
//     method:'POST',
//     body: JSON.stringify(item),
//     headers:{
//         "Content-Type":'application/json',
//         "Accept":'application/json'
//     }
// })
// // result =await result.json();
// // console.log(result);
//     // console.log(item);
// 	navigate("/admin_dashboard");
// 	setError(false);
// 	}
// };

// // Showing success message
// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>User {email} successfully registered!!</h1>
// 	</div>
// 	);
// };

// // Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };

// return (
// 	<div className="form">
// 	<div>
// 		<h1>User Registration</h1>
// 	</div>

// 	{/* Calling to the methods */}
// 	<div className="messages">
// 		{errorMessage()}
// 		{successMessage()}
// 	</div>

// 	<form>
// 		{/* Labels and inputs for form data */}

// 		<label >Email</label>
// 		<input onChange={handleEmail} className="input"
// 		value={email} type="email" />

// 		<label >Password</label>
// 		<input onChange={handlePassword} className="input"
// 		value={password} type="password" />

// 		<button onClick={handleSubmit} type="submit">
// 		Submit
// 		</button>
// 	</form>
// 	</div>
// );
// }
