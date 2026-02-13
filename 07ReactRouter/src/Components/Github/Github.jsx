import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch('https://api.github.com/users/harisshahnawaz')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);
    
    return (
        <div className='bg-gray-400 text-white text-3xl m-4 text-center'>
            My Github Followers: {data.followers}
            <img src={data.avatar_url} alt="git picture" width={300}/>
        </div>
    );
}

export default Github;
