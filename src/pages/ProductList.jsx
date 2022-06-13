import Header from './../components/Header';
import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';

const ProductList = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        getData();
    },[])
    
    const deleteOperation= async (id) =>{
        let result = await fetch("http://localhost:8000/api/delete/"+id,{
            method: "DELETE",
        });
        result= await result.json();
        console.log(result);
        getData();
    }
    
    const getData = async () =>{
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result)
}
    
    return(
        <div>
            <Header />
            <h1>Product List</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Operation</th>

                </tr>
                </thead>
                {
                    data.map((item) =>
                        <tbody key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img width="100" src={"http://localhost:8000/"+item.file_path}/></td>
                            <td><span onClick={()=> deleteOperation(item.id)} className="delete">Delete</span></td>
                        </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    )
}

export default ProductList;