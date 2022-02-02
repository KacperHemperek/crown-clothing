import React, { Component } from "react";
import DATA_SHOP from "./shop.data.js";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: DATA_SHOP,
    };
  }
  render() {
    return DATA_SHOP.map((item) => {
      return <h1 key={item.id}>{item.title}</h1>;
    });
  }
}

export default ShopPage;
