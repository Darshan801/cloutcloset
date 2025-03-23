import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import dropdown_icon1 from './dropdown_icon1.png'
import hero from './hero.avif'
import exchange_icon from './exchange_icon.png'
import support_icon from './support_icon.png'
import quality_icon from './quality_icon.png'
import cross_icon from './cross_icon.png'
import bin_icon from './bin_icon.png'
import bag from './bag.avif'
import bag1 from './bag1.avif'
import black1 from './black1.avif'
import blue1 from './blue1.avif'
import dum3 from './dum3.jpg'
import dum4 from './dum4.png'
import model1 from './model1.avif'
import model2 from './model2.avif'
import model3 from './model3.avif'
import model4 from './model4.avif'
import model5 from './model5.avif'
import model6 from './model6.avif'
import model7 from './model7.avif'
import model8 from './model8.avif'


export const assets={
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    dropdown_icon1,
    hero,
    exchange_icon,
    quality_icon,
    support_icon,
    cross_icon,
    bin_icon,
    bag,
    bag1,
    black1,
    blue1,
    dum3,
    dum4,
    model1,
    model2,
    model3,
    model4,
    model5,
    model6,
    model7,
    model8
}


export const products=[
        {
          "_id": "1",
          "name": "Basic T-Shirt",
          "description": "A comfortable and casual t-shirt made of soft cotton.",
          "price": 19.99,
          "image": [
            model1
          ],
          "category": "Men",
          "subcategory": "T-Shirts",
          "sizes": ["S", "M", "L", "XL"],
          "data": "2025-03-06",
          "bestseller": true
        },
        {
          "_id": "2",
          "name": "Slim Fit Jeans",
          "description": "Stylish slim-fit jeans for a modern look.",
          "price": 39.99,
          "image": [
            model2
          ],
          "category": "Men",
          "subcategory": "Jeans",
          "sizes": ["28", "30", "32", "34", "36"],
          "data": "2025-02-20",
          "bestseller": true
        },
        {
          "_id": "3",
          "name": "Leather Jacket",
          "description": "A stylish leather jacket with a vintage look.",
          "price": 129.99,
          "image": [
           model3
          ],
          "category": "Women",
          "subcategory": "Jackets",
          "sizes": ["M", "L", "XL"],
          "data": "2025-01-15",
          "bestseller": false
        },
        {
          "_id": "4",
          "name": "Graphic Hoodie",
          "description": "A cozy hoodie with a bold graphic print.",
          "price": 39.99,
          "image": [
           model4
          ],
          "category": "Men",
          "subcategory": "Hoodies",
          "sizes": ["S", "M", "L", "XL"],
          "data": "2025-03-01",
          "bestseller": false
        },
        {
          "_id": "5",
          "name": "Casual Blazer",
          "description": "A lightweight blazer perfect for casual office wear.",
          "price": 79.99,
          "image": [
            model5
          ],
          "category": "Men",
          "subcategory": "Shoes",
          "sizes": ["M", "L", "XL"],
          "data": "2025-03-04",
          "bestseller": true
        },
        {
          "_id": "6",
          "name": "High-Waisted Skirt",
          "description": "A flattering high-waisted skirt, ideal for both casual and formal wear.",
          "price": 29.99,
          "image": [
           model6
          ],
          "category": "Women",
          "subcategory": "T-shirts",
          "sizes": ["S", "M", "L"],
          "data": "2025-02-22",
          "bestseller": true
        },
        {
          "_id": "7",
          "name": "Plaid Shirt",  
          "description": "A classic plaid shirt with a relaxed fit.",
          "price": 24.99,
          "image": [
           model7
          ],
          "category": "Men",
          "subcategory": "Jeans",
          "sizes": ["S", "M", "L", "XL"],
          "data": "2025-01-18",
          "bestseller": true
        },
        {
          "_id": "8",
          "name": "Denim Jacket",
          "description": "A timeless denim jacket perfect for layering.",
          "price": 49.99,
          "image": [
            model8
          ],
          "category": "Kids",
          "subcategory": "Jeans",
          "sizes": ["M", "L", "XL"],
          "data": "2025-03-02",
          "bestseller": false
        },
        {
          "_id": "9",
          "name": "Sweater Dress",
          "description": "A cozy, knitted sweater dress for colder months.",
          "price": 49.99,
          "image": [
           blue1
          ],
          "category": "Men",
          "subcategory": "T-shirts",
          "sizes": ["S", "M", "L", "XL"],
          "data": "2025-02-18",
          "bestseller": true
        },
        {
          "_id": "10",
          "name": "Chinos",
          "description": "Comfortable chinos for casual or semi-formal wear.",
          "price": 39.99,
          "image": [
           black1
          ],
          "category": "Kids",
          "subcategory": "Shoes",
          "sizes": ["30", "32", "34", "36", "38"],
          "data": "2025-01-30",
          "bestseller": false
        },
        {
          "_id": "11",
          "name": "Button-Down Shirt",
          "description": "A versatile button-down shirt, suitable for both casual and formal occasions.",
          "price": 34.99,
          "image": [
           model1
          ],
          "category": "Men",
          "subcategory": "Shoes",
          "sizes": ["S", "M", "L", "XL"],
          "data": "2025-02-25",
          "bestseller": true
        },
        {
          "_id": "12",
          "name": "Faux Fur Coat",
          "description": "A luxurious faux fur coat perfect for winter.",
          "price": 129.99,
          "image": [
           model2
          ],
          "category": "Women",
          "subcategory": "Jeans",
          "sizes": ["M", "L", "XL"],
          "data": "2025-03-01",
          "bestseller": false
        },
        {
          "_id": "13",
          "name": "Puffer Jacket",
          "description": "Insulated puffer jacket to keep you warm during winter months.",
          "price": 99.99,
          "image": [
           model3
          ],
          "category": "Clothing",
          "subcategory": "Jackets",
          "sizes": ["S", "M", "L", "XL"],
          "data": "2025-02-15",
          "bestseller": false
        },
        {
          "_id": "14",
          "name": "Cotton Shorts",
          "description": "Breathable cotton shorts for summer wear.",
          "price": 19.99,
          "image": [
           model4
          ],
          "category": "Men",
          "subcategory": "Jackets",
          "sizes": ["S", "M", "L"],
          "data": "2025-03-05",
          "bestseller": true
        },
        {
          "_id": "15",
          "name": "Turtleneck Sweater",
          "description": "A cozy, form-fitting turtleneck sweater for cooler weather.",
          "price": 49.99,
          "image": [
           model5
          ],
          "category": "Women",
          "subcategory": "Sweaters",
          "sizes": ["S", "M", "L", "XL"],
          "data": "2025-03-03",
          "bestseller": true
        },
        {
          "_id": "16",
          "name": "Plaid Skirt",
          "description": "A chic plaid skirt with a flattering A-line silhouette.",
          "price": 34.99,
          "image": [
           model6
          ],
          "category": "Kids",
          "subcategory": "T-shirts",
          "sizes": ["S", "M", "L"],
          "data": "2025-03-06",
          "bestseller": false
        },
        {
          "_id": "17",
          "name": "Summer Dress",
          "description": "A light and airy summer dress for sunny days.",
          "price": 39.99,
          "image": [
           model7
          ],
          "category": "Women",
          "subcategory": "Jeans",
          "sizes": ["S", "M", "L"],
          "data": "2025-02-10",
          "bestseller": true
        }     
]
