// let headersList = {
//     "Accept": "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//     "X-RapidAPI-Key": "71b46f7ec1msh58674f27bbcd2c0p1a5225jsnb0cb6d9d3dc1",
//     "X-RapidAPI-Host": "shazam.p.rapidapi.com"
//    }
   
//    let response = await fetch("https://shazam.p.rapidapi.com/charts/track", { 
//      method: "GET",
//      headers: headersList
//    });
   
//    let data = await response.text();
//    console.log(data);



import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '71b46f7ec1msh58674f27bbcd2c0p1a5225jsnb0cb6d9d3dc1',
// 		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
// 	}
// };

// fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));




    export const shazamCoreApi = createApi(
        {
            reducerPath:'shazamCoreApi',
            baseQuery:fetchBaseQuery({

                baseUrl:'https://shazam.p.rapidapi.com',
                prepareHeaders: (headers)=>{
                    headers.set('X-RapidAPI-Key', '71b46f7ec1msh58674f27bbcd2c0p1a5225jsnb0cb6d9d3dc1');

                    return headers;
                },
            }),
            endpoints:(builder)=> ({
                getTopCharts: builder.query({query: () =>'/charts/track'}),
            }),
        })



        export const {
            useGetTopChartsQuery,

        } = shazamCoreApi;