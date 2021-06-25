import React, { Component } from 'react';
import axios from 'axios';
//import { fetchUserRequest, fetchِDataFailure, fetchِDataSuccess } from '../redux';
import { fetchData } from '../redux';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function PriceContainer({oilData, fetchData}) {
    function showDetails (event) {
        let output = '' 
        const data = oilData.users;
        const index = event.currentTarget.rowIndex
          console.log("Index is: " + data[index])
            for(let key in data[index]) {
               output += `${key} :  ${data[index][key]} </br>`
                }
       document.getElementById('article').innerHTML = output;
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(oilData.users)
    return oilData.loading ? ( <p>Loading...</p> ) 
         : oilData.error ? ( <p>{oilData.error}</p> ) 
         : (
    <div>
            <h3>Fuel Price</h3>
         <table border="1" cellpadding = "5" cellspacing = "0.5" align="center" >
            <thead>
                <th>price</th>
                <th>Station</th>
            </thead>
            <tbody>
                {
                    //oilData && oilData.users && oilData.users.map(item => <p>{item.Site_Name}</p>)
                    
                    oilData.users.length ?
                    oilData.users.map((post, index) => {
                        return (
                            <tr key={index} onClick={ showDetails}
                            > 
                            <td>{post.Price}</td>
                            <td>{post.Site_Name}</td>
                            </tr>
                    )
                        }) : <tr><td colSpan="3">Loading data...</td></tr>
                }
            </tbody>
        </table>
    </div>
    )
}

const mapStatesToProps = state => {
    return {
        oilData: state.user
        
    }
}
const mapDispatchTpProps = dispatch => {
    return{
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStatesToProps, mapDispatchTpProps)(PriceContainer);