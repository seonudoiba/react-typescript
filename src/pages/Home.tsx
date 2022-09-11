import React,{useContext } from 'react';
interface user {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  
}
type ProductsProps = {
  products: {
    id: number,
    title: string,
    price: number,
    rating: {rate: number, count: number},
  image: string,
  category:string,
  description:string,
  }[] | null
};
// import FavContext from "../pages/index";
// import {Thumbnail} from './Thumbnail'

const Home = ({products}: ProductsProps) => {
  
  // const star = useContext(FavContext);

  //   console.log(star)
  //   console.log('star')
  return (
    <div className="">
        {/* {results.map(result => <Thumbnail key={result.id} result={result} /> )} */}
        {
        products?.map( (product) => <h1 key={product.id} >{product.title}</h1>)
        }
        
        
    </div>
    
  )
}

export default Home