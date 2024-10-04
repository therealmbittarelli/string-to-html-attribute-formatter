# string-to-html-attribute-formatter

### 🧵 --- 🤖 --- ✨💻✨

This package accepts a string and formats it to be html attribute-friendly. It removes redundancy by reducing the need to format the same string for use as html attributes for related elements. The formatting function:
  - sets all characters to lowercase
  - replaces spaces with hyphens (' ' --> '-')
  - removes special characters, but allows numbers

----------

### Getting Started

- Install with npm: `npm install string-to-html-attribute-formatter`
- Use:
```
import { formatString } from 'string-to-html-attribute-formatter'

formatString('My String is83** ^%^ *73ready')

// output: 'my-string-is-ready'
```

----------

### Example use case:

- 🚂 Your React `product` component, which consists of an image, a product name, and a price, receives a param named `productName`, ex: `productName: 'Chug chug chug! Train Set`
- 📋 There will be many products on your site, so for this component's jsx you create a `<li>` which will require a `key`, and add the children elements listed above, each of which will need `ids` for styling.
- 🪄 Using `string-to-html-attribute-formatter`, you format the `productName` param: `let formattedProductName = formatString(productName);`
- 😎 You use your formatted `productName` as key and ids:
  - `key`: `chug-chug-chug-train-set`
  - `image id`: `chug-chug-chug-train-set` + `-image`
  - `product name id`: `chug-chug-chug-train-set`
  - `price id`: `chug-chug-chug-train-set` + `-price`