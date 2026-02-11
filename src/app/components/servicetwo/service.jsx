"use client"; // Required for useState in Next.js App Router
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./service.module.css";

const productsData = [
  { id: 1, category: "Eyebrow pencils", title: "Eyebrow Pencil", price: "$55", img: "/services/bottom/1.jpg" },
  { id: 2, category: "Nail polishes", title: "Pink Polish", price: "$55", img: "/services/bottom/2.png" },
  { id: 3, category: "Lipsticks", title: "Matte Lipstick", price: "$55", img: "/services/bottom/3.jpg" },
  { id: 4, category: "Makeup bases", title: "Foundation Base", price: "$55", img: "/services/bottom/4.png" },
  { id: 5, category: "Night creams", title: "Night Cream", price: "$55", img: "/services/bottom/5.jpg" },
  { id: 6, category: "Mascaras", title: "Volume Mascara", price: "$55", img: "/services/bottom/6.jpg" },
  { id: 7, category: "Lipsticks", title: "Red Gloss", price: "$55", img: "/services/bottom/7.jpg" },
  { id: 8, category: "Nail polishes", title: "Gel Polish", price: "$55", img: "/services/bottom/8.jpg" },
];

const categories = [
  "All products",
  "Nail polishes",
  "Makeup bases",
  "Lipsticks",
  "Night creams",
  "Mascaras",
  "Eyebrow pencils"
];

const Service = () => {
  const [activeFilter, setActiveFilter] = useState("All products");

  // Logic to filter products
  const filteredProducts = activeFilter === "All products" 
    ? productsData 
    : productsData.filter(item => item.category === activeFilter);

  return (
    <section className={styles.sectionOne}>
      <h1>Our Shop</h1>
      <p>Eleifend arcu non lorem justo in tempus purus gravida. Est tortor.</p>
      
      <ul className={styles.filterList}>
        {categories.map((cat) => (
          <li 
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={activeFilter === cat ? styles.activeFilter : ""}
          >
            {cat}
          </li>
        ))}
      </ul>

      <div className={styles.sectionGrid}>
        {filteredProducts.map((product) => (
          <article key={product.id}>
            <Image 
              src={product.img} 
              width={240} 
              height={240} 
              alt={product.title} 
            />
            <h3>{product.title}</h3>
            <span>{product.price}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Service;