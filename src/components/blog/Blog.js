import React, { useState } from 'react';
import styles from './Blog.module.css'

const Blog = (props) => {
  const blogPosts = [
    {
        id: 1,
        title: 'Alpaca socks vs Cotton Socks',
        content: 'Comparando calcetines de alpaca con calcetines de algodón.',
        category: 'temas de ropa',
      },
      {
        id: 2,
        title: 'Cómo monetizar tu blog',
        content: 'Descubre estrategias efectivas para ganar dinero con tu blog.',
        category: 'blogging',
      },
      {
        id: 3,
        title: 'Los beneficios de la escritura creativa',
        content: 'Explora los beneficios de la escritura creativa en tu vida diaria.',
        category: 'writing',
      },
      {
        id: 4,
        title: 'Viajes inolvidables: consejos para explorar el mundo',
        content: 'Planifica tus viajes y haz que sean experiencias inolvidables.',
        category: 'travel',
      },
      {
        id: 5,
        title: 'Cocina deliciosa: recetas y secretos',
        content: 'Descubre recetas deliciosas y secretos culinarios para impresionar a tus amigos y familiares.',
        category: 'food',
      },
  ];

  const categories = [...new Set(blogPosts.map((post) => post.category))];
  
  // Agrega un estado para mantener el valor seleccionado en el filtro
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Función para manejar cambios en el filtro
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filtra las entradas de blog según la categoría seleccionada
  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className={styles['blog-container']}>
      <h1>Mi Blog</h1>
      <div>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {filteredPosts.map((post) => (
        <div key={post.id} className={styles['blog-post']}>
          <h2 className={styles['blog-title']}>
            <a href="#" className={styles['category-link']}>{post.title}</a>
          </h2>
          <p className={styles['blog-content']}>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
