import React, { FunctionComponent } from "react";
import { ProductData } from "../../../application/store/actions/productsActions";
import { Font1 } from "../CustomFonts/Font1";

type Props = { product: ProductData };

export const ProductShortDescription: FunctionComponent<Props> = ({
  product,
}) => {
  return (
    <div>
      {" "}
      <Font1 size={19}>
        <div
          className="Container"
          dangerouslySetInnerHTML={{ __html: product.shortDescription }}
        ></div>
      </Font1>
    </div>
  );
};
