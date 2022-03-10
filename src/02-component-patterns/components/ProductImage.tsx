import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = noImage }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string = img;
  if (product.img) {
    imgToShow = product.img
  }
  return (
    <img src={imgToShow} alt="Product" className={styles.productImg} />
  )
}