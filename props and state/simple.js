import React from 'react';
import './App.css';
class Mekha extends React.Component{
    state={
        name : "sekhar",
       roll:46,
       college:"Raghu Institute of Technology",
       branch:"ECE",
       sec:"sec-A"

    };
    render(){
        return(
            <div>
              <form  padding="2px">
                  <tr>
                      <th className='chill'>Student name</th>
                      <th className='chill'>Roll No</th>
                      <th className='chill'>College </th>
                      <th className='chill'>Branch</th>
                      <th className='chill'>Section</th>
                  </tr>
                <tr className='sim'>
                    <td className='chill'>{this.state.name}</td>
                    <td className='chill'>{this.state.roll}</td>
                    <td className='chill'>{this.state.college}</td>
                    <td className='chill'>{this.state.branch}</td>
                    <td className='chill'>{this.state.sec}</td>
                </tr>
                </form>
            </div>
        );
        
    }
}
export default Mekha;