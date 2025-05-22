const products = [];
for (let i = 1; i <= 9; i++) products.push({ id: i, category: 'Sedan', title: `Sedan Model ${i}`, description: 'A comfortable and efficient sedan.', price: 20000 + i * 1000, image: `https://source.unsplash.com/800x600/?sedan&sig=${i}` });
for (let i = 1; i <= 9; i++) products.push({ id: 9 + i, category: 'SUV', title: `SUV Model ${i}`, description: 'A versatile and spacious SUV.', price: 30000 + i * 1200, image: `https://source.unsplash.com/800x600/?suv&sig=${i}` });
for (let i = 1; i <= 9; i++) products.push({ id: 18 + i, category: 'Truck', title: `Truck Model ${i}`, description: 'A powerful and reliable truck.', price: 40000 + i * 1500, image: `https://source.unsplash.com/800x600/?truck&sig=${i}` });
export default products;
