// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

//Change to your own API Gateway endpoint
export const getAnswer = async(respid,text,model_params,headers) =>{
    const options ={
        method:'POST',
        // mode: 'no-cors',
        headers:headers,
        body:JSON.stringify({id:respid,prompt:text,params:model_params})
    }
    try {
        var resp = await fetch('https://chat.noland.world/v1/chat/completions', options);

        if (!resp.ok){
            const data = await resp.text();
            throw (Error(`Error: ${resp.status},${data}`));
        }
        var data = await resp.json() ;
        return data;
    } catch (err) {
        throw err;
    }
}

export const loginAuth = async(username,password) =>{
    const options ={
        method:'POST',
        headers:{'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'},
        body:JSON.stringify({username:username,password:password})
    }
    try {
        var resp = await fetch('https://login.noland.world', options);
        if (!resp.ok) {
            console.log('resp.ok');
            const data = await resp.json();

            throw (Error(`Error: ${resp.status},${data.msg}`));
        }
        var data = await resp.json() ;

        return data;
    } catch (err) {
        throw err;
    }
}
