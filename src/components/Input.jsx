import React, { useEffect, useState } from 'react';

function Input() {
    const [eye, setEye] = useState('eyeopen.svg');

    const handleClick = () => {
        setEye(prevEye => prevEye === 'eyeopen.svg' ? 'eyeclose.svg' : 'eyeopen.svg');
    }
    const [initialValues, setInitialValues] = useState({
        url: '',
        username: '',
        password: ''
    });

    const [formValue, setFormValue] = useState([]);
    const [data, setData] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newFormValue = [...formValue, initialValues];
        setFormValue(newFormValue);
        setData(newFormValue);
        localStorage.setItem('myArray', JSON.stringify(newFormValue));
    };

    useEffect(() => {
        const storedData = localStorage.getItem('myArray');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    return (
        <div className='flex flex-col justify-center item-center'>
        <form onSubmit={submitForm}>
            <div className='text-black flex-col items-center justify-center w-[50vw] m-40'>
                <div className='mb-4'>
                    <label className='pl-4 block mb-2' htmlFor="url">URL</label>
                    <input value={initialValues.url} 
                    onChange={(e)=>setInitialValues({...initialValues, url: e.target.value.trim()})}
                    className='border-black border rounded-full px-4 py-2 w-full' type="text" id="url" placeholder="URL" required />
                </div>

                <div className='flex items-center justify-center w-full mb-4'>
                    <div className='w-full mr-2'>
                        <label className='pl-4 block mb-2' htmlFor="username">Username</label>
                        <input value={initialValues.username} 
                    onChange={(e)=>setInitialValues({...initialValues, username: e.target.value.trim()})} className='border-black border rounded-full px-4 py-2 w-full' type="text" id="username" placeholder="Username" required />
                    </div>

                    <div className='w-full ml-2'>
                        <label className='pl-4 block mb-2' htmlFor="password">Password</label>
                        <div className='flex justify-end '>
                            <input value={initialValues.password} 
                    onChange={(e)=>setInitialValues({...initialValues, password: e.target.value.trim()})} className='border-black border rounded-full  px-4 py-2 w-full' type={eye === 'eyeopen.svg' ? 'password' : 'text'} id="password" placeholder="Password" required />
                            <img onClick={handleClick} className='w-8  mt-1 mx-2 ' src={eye} alt="" />
                        </div>
                    </div>
                </div>
                <button type="submit" className='border-black text-center border rounded-full px-4 py-2 w-40 h-10 mt-8 hover:bg-red-500 bg-red-400 text-white '>Save</button>
            </div>
        </form>
        <div className="relative flex flex-col w-full h-full  text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <table className="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                URL
                            </p>
                        </th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Username
                            </p>
                        </th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Password
                            </p>
                        </th>
                
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="p-4 border-b border-blue-gray-50">
                                <a href={item.url} className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {item.url}
                                </a>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {item.username}
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {item.password}
                                </p>
                                
                                
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

Input.propTypes = {}

export default Input
