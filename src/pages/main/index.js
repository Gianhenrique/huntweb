import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';


export default class Main extends Component{
    //armazena variavel
    state = {
        products: [],
    }
    //executa uma ação quando o componente é exibido em tela
    componentDidMount(){
    this.loadProducts();
}
    
loadProducts = async () =>{
    const response = await api.get('/products')

    //preenche a variavel products
    this.setState({products: response.data.docs });
};
 
    render(){
        const { products } = this.state;


        return (
            //percorre a lista dos produtos da api
            <div className = "product-list">
            {products.map(product =>(
               <article key={product._id}>
               <strong>{product.title}</strong>
               <p>{product.description}</p>

               <a href="">Acessar</a>
               </article> 
                
            ))}
            </div>
        )
           

    }

}