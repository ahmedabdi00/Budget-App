import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [users, setUsers] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const getUsers = async () => {
    try {
      const result = await axios({
        url: '/users/',
        method: 'GET',
      });
      
      // this depends on what your api is returning as a key
      setUsers(result.data.data);

    } catch (err) {
      console.log(err);
    }
  };

  const getBudgets = async () => {
    try {
      const result = await axios({
        url: '/attain/budget',
        method: 'GET',
      });
      
      // this depends on what your api is returning as a key
      setBudgets(result.data.data);

    } catch (err) {
      console.log(err);
    }
  };

  
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getBudgets();
  }, []);

  return {users, budgets};
};


export default useApplicationData;