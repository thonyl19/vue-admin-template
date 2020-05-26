import Mock from 'mockjs'
//const ADODB = require('../');
//import ADODB from 'node-adodb';
//import { ADODB } from 'adodb';
const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=node-adodb.mdb;');

 
export default [
  {
    url: '/mdb/list',
    type: 'get',
    response: config => {
      const items = ['data.items']
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    //  connection
    //     .query('SELECT * FROM Users')
    //     .then(data => {
    //       return {
    //         code: 30000,
    //         data
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });   
    }
  }
   
]
