import React, { useState } from 'react';
import './App.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Account = ({ onLogin, onSignup }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        if(formData.email === '' || formData.password === ''){
            alert("Fill in all the fields");
            return;
        }

        alert('Login successful')

        onLogin();
    };


    const handleSignup = (e) => {

        e.preventDefault();

        if(formData.email === '' || formData.password === '' || formData.name === '' || formData.contact === ''){
            alert("Fill in all the fields");
            return;
        }

        alert('Signup successfull')

        onSignup();

    };


    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validateContact(contact) {
        const re = /^[9876][0-9]{9}$/;
        return re.test(String(contact));
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(String(password));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (!isLogin) {
            let newErrors = { ...errors };

            switch (name) {
                case 'email':
                    newErrors.email = validateEmail(value) ? '' : 'Invalid email address';
                    break;
                case 'contact':
                    newErrors.contact = validateContact(value) && value.length === 10
                        ? '' : 'Contact must be exactly 10 digits with starting digit b/w 6 to 9';
                    break;
                case 'password':
                    newErrors.password = validatePassword(value)
                        ? '' : 'Password must be at least 8 characters with at least one uppercase letter, one number, and one special character';
                    break;
                default:
                    break;
            }

            setErrors(newErrors);
        }
    }


    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-300 via-blue-200 to-teal-200">
          <div id="account" className="flex flex-col md:flex-row mt-10 md:ml-10">
            <div className="m-5 p-8 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                {isLogin ? 'Login' : 'Sign Up'}
              </h2>

              {isLogin ? (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}
      
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <div onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                    {showPassword ? (<FaEyeSlash />) : (<FaEye />)}
                  </div>
                </div>
              </div>
      
              {!isLogin && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact</label>
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.contact && (
                      <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
                    )}
                  </div>
      
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </>
              )}
      
              <div className="mt-6">
                <button
                  onClick={isLogin ? handleLogin : handleSignup}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                >
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>
              </div>
      
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  {isLogin ? (
                    <>
                      Don’t have an account?{' '}
                      <span
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-purple-600 cursor-pointer hover:underline"
                      >
                        Create an account
                      </span>
                    </>
                  ) : (
                    <>
                      Already have an account?{' '}
                      <span
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-purple-600 cursor-pointer hover:underline"
                      >
                        Login here
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    
};



export default Account;

