import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { WooCommerceGateway } from "../../infra/http/WooCommerceGateway";
import { useSelector } from "react-redux";
import { RootState } from "../../application/store/configureStore";
import { ProductData } from "../../application/store/actions/productsActions";
import { dispatchAddProduct } from "../../application/store/actions/cartActions";
import { BaseStyledPage } from "./BaseStyledPage";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { ProductDescription } from "../components/ProductDetails/ProductDescription";
import { ProductSpecifications } from "../components/ProductDetails/ProductSpecifications";

export const ProductPage = () => {
  // const [products, setProducts] = useState<any>([]);
  const products = useSelector((state: RootState) => state.products.products);
  const params = useParams();
  const [product, setProduct] = useState<ProductData>();

  useEffect(() => {
    const productId = params.productId;
    if (!productId) return;
    const product = products.find((p) => p.id.toString() === productId);
    setProduct(product);
  }, [products]);

  const onClick = (product: ProductData) => {
    dispatchAddProduct(product);
  };

  return (
    <BaseStyledPage>
      {product && (
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "100%", m: 1, boxSizing: "border-box" }}>
              <img src={product.images[0]} alt="product image" width={"100%"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{}}>
              <ProductDetails product={product} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <ProductDescription product={product} />
            </Box>
          </Grid>
        </Grid>
      )}
    </BaseStyledPage>
  );
};
