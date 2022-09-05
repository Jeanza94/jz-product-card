# jz-product-card 

este es un paquete de pruebas de despliegue en npm

### fernando herrera curso react-pro

## ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jz-product-card'
```


```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>

     {
         ({ reset, count, increaseBy, isMaxCountReachemaxCount }) => (
             <>
                 <ProductImage />
                 <ProductTitle />
                 <ProductButtons />
             </>
         )
     }

</ProductCard>
```