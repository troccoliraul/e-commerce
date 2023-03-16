// importo los productos
import { db } from '../firebaseConfig/firebase.js'
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const productsCollection = collection(db,"items");

// funcion para mostrar todos los docs
// const getProducts= async (setState) =>{
//   const data = await getDocs (productsCollection)
// // console.log (data.docs)
// setState(
//   data.docs.map((doc)=>({...doc.data(),id:doc.id}))
// )
// /*  console.log (products)  */
// }

// promesas
// const getProducts = new Promise(async(resolve, reject) => {
//   setTimeout(() => {
//     resolve(productList);
//   }, 2000);
// });

//Async Await que setea mi hook de estado
const getAllProductsFromDB = async (setState) => {
  try {
    const result = await getDocs (productsCollection);
    setState(result.docs.map((doc)=>({...doc.data(),id:doc.id})));
  } catch (error) {
    console.log(error);
    alert('No podemos mostrar los productos en este momento');
  }
};

//Async Await que setea mi hook de estado
const getProductById = async (id, setState) => {
  try {
    const product = await getDoc(doc(db,"items",id));
    setState(product.data());
  } catch (error) {
    console.log(error);
  }
};

export { getAllProductsFromDB, getProductById};