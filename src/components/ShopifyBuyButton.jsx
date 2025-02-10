// components/ShopifyBuyButton.jsx
import { useEffect } from 'react';

const SHOPIFY_DOMAIN = '8qisz3-sh.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = '67052ae42a724279eaf04213a24eca4a';

function ShopifyBuyButton({ productId }) {
  useEffect(() => {
    // Create a unique ID for this button instance
    const buttonId = `shopify-buy-button-${productId}`;
    
    // Load Shopify Buy Button SDK
    if (!window.ShopifyBuy) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      script.onload = () => initShopifyButton(buttonId);
      document.head.appendChild(script);
    } else if (window.ShopifyBuy.UI) {
      initShopifyButton(buttonId);
    }
  }, [productId]);

  function initShopifyButton(buttonId) {
    const client = window.ShopifyBuy.buildClient({
      domain: SHOPIFY_DOMAIN,
      storefrontAccessToken: STOREFRONT_ACCESS_TOKEN,
    });

    window.ShopifyBuy.UI.onReady(client).then((ui) => {
      ui.createComponent('product', {
        id: productId,
        node: document.getElementById(buttonId),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "0"
                }
              },
              button: {
                "background-color": "#4CAF50",
                ":hover": {
                  "background-color": "#45a049"
                }
              }
            },
            text: {
              button: "Add to cart"
            }
          },
          cart: {
            text: {
              total: "Subtotal",
              button: "Checkout"
            }
          }
        }
      });
    });
  }

  return <div id={`shopify-buy-button-${productId}`} />;
}

export default ShopifyBuyButton;