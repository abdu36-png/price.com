import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../api/apiClient";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let mounted = true;
    api.get(`/products/${id}`).then(res => {
      if (mounted) setProduct(res.data);
    }).catch(() => {
      if (mounted) setProduct(null);
    });
    return () => mounted = false;
  }, [id]);

  if (product === null) return <div className="max-w-6xl mx-auto px-4">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="card flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src={product.thumbnail || product.image || product.images?.[0]}
            alt={product.title}
            className="w-full h-64 object-contain"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="muted mt-2">{product.category}</p>
          <p className="text-2xl font-bold mt-4">${product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          <h3 className="mt-6 font-medium">Compare Prices</h3>
          <ul className="mt-2">
            {product.prices?.map((p,i) => (
              <li key={i} className="flex justify-between py-2 border-b">
                <span className="muted">{p.store}</span>
                <a className="font-semibold text-accent" href={p.url} target="_blank" rel="noreferrer">
                  ${p.price}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link to="/" className="text-sm text-gray-600">← Back to results</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
