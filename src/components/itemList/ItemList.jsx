import React from 'react';
import Item from '../item/Item';

const ItemList = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {productos.map((producto) => (
        <Item 
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          img={producto.img}
          stock={producto.stock}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
};

export default ItemList;
